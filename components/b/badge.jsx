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
		"content": `<style>.o9_5blban {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m13.068 3.141l.29.242a2.19 2.19 0 0 0 1.775.475l.372-.064a1.67 1.67 0 0 1 1.849 1.067l.131.355a2.19 2.19 0 0 0 1.299 1.299l.355.131a1.67 1.67 0 0 1 1.067 1.849l-.064.372a2.19 2.19 0 0 0 .475 1.775l.242.29a1.67 1.67 0 0 1 0 2.136l-.242.29a2.19 2.19 0 0 0-.475 1.775l.064.372a1.67 1.67 0 0 1-1.067 1.849l-.355.131a2.19 2.19 0 0 0-1.299 1.299l-.131.355a1.67 1.67 0 0 1-1.849 1.067l-.372-.064a2.19 2.19 0 0 0-1.775.475l-.29.242a1.67 1.67 0 0 1-2.136 0l-.29-.242a2.19 2.19 0 0 0-1.775-.475l-.372.064a1.67 1.67 0 0 1-1.849-1.067l-.131-.355a2.19 2.19 0 0 0-1.299-1.299l-.355-.131a1.67 1.67 0 0 1-1.067-1.849l.064-.372a2.19 2.19 0 0 0-.475-1.775l-.242-.29a1.67 1.67 0 0 1 0-2.136l.242-.29a2.19 2.19 0 0 0 .475-1.775l-.064-.372a1.67 1.67 0 0 1 1.067-1.849l.355-.131a2.19 2.19 0 0 0 1.299-1.299l.131-.355a1.67 1.67 0 0 1 1.849-1.067l.372.064a2.19 2.19 0 0 0 1.775-.475l.29-.242a1.67 1.67 0 0 1 2.136 0");
}
</style><path class="o9_5blban"/>`,
		"fallback": "uix:badge",
	});
}

export default Component;
