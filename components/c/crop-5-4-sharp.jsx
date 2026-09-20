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
		"content": `<style>.v0nalbcir {
  fill: currentColor;
  d: path("M4 19V5h16v14z");
}
</style><path class="v0nalbcir"/>`,
		"fallback": "material-symbols-light:crop-5-4-sharp",
	});
}

export default Component;
