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
		"content": `<style>.kfpj1juav {
  fill: currentColor;
  d: path("m9.55 17.308l-4.97-4.97l.714-.713l4.256 4.256l9.156-9.156l.713.714z");
}
</style><path class="kfpj1juav"/>`,
		"fallback": "material-symbols-light:check",
	});
}

export default Component;
