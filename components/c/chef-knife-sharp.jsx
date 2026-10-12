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
		"content": `<style>.z5bgvya6x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m9 12l10.75-8.75c1-.8 1.9.1 1.25 1.1C18.5 9 15.5 12.75 12 15Zm-.74 2.76l.48.48l.64.64l-.64.64l-2.97 2.97l-.64.64l-.64-.64l-.48-.48l-.64-.64l.64-.64l2.97-2.97l.64-.64z");
}
</style><path class="z5bgvya6x"/>`,
		"fallback": "iconoven:chef-knife-sharp",
	});
}

export default Component;
