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
		"content": `<style>.f3wcrjryr {
  fill: currentColor;
  d: path("M2 20V6h8l2-2h10v16zm3.825-7H11V7.825zM4 12l4-4H4zm0 3v3h16V6h-7v9zm7-4");
}
</style><path class="f3wcrjryr"/>`,
		"fallback": "material-symbols:files-outline-sharp",
	});
}

export default Component;
