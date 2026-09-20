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
		"content": `<style>.gn7jahb2u {
  fill: currentColor;
  d: path("M7 20V4h10v16zm-4-2V6h2v12zm16 0V6h2v12zM9 18h6V6H9zm0 0V6z");
}
</style><path class="gn7jahb2u"/>`,
		"fallback": "material-symbols:amp-stories-outline-sharp",
	});
}

export default Component;
