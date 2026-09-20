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
		"content": `<style>.iomt9xv8k {
  fill: currentColor;
  d: path("M6 18V2h16v16zm-4 4V6h2v14h14v2zM8 6h12V4H8z");
}
</style><path class="iomt9xv8k"/>`,
		"fallback": "material-symbols:ad-group-sharp",
	});
}

export default Component;
