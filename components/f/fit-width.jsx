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
		"content": `<style>.rts2tzbku {
  fill: currentColor;
  d: path("M4 20V4h1.23v16zm14.77 0V4H20v16zM7.691 12.616v-1.231h1.231v1.23zm3.693 0v-1.231h1.23v1.23zm3.692 0v-1.231h1.23v1.23z");
}
</style><path class="rts2tzbku"/>`,
		"fallback": "material-symbols-light:fit-width",
	});
}

export default Component;
