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
		"content": `<style>.zudgoib0c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12.78 5.22l5.69 7.06l.78.97H4.75l.78-.97l5.69-7.06l.78-.97zM4.75 18.75h14.5");
}
</style><path class="zudgoib0c"/>`,
		"fallback": "iconoven:eject-key-sharp",
	});
}

export default Component;
