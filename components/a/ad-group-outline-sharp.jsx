import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.m0wr-cbne {
  fill: currentColor;
  d: path("M8 16h12V6H8zm-2 2V2h16v16zm-4 4V6h2v14h14v2zm6-6V4z");
}
</style><path class="m0wr-cbne"/>`,
		"fallback": "material-symbols:ad-group-outline-sharp",
	});
}

export default Component;
