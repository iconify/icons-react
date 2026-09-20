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
		"content": `<style>.j-uhg7vsc {
  d: path("M11 3H8v7l-2 2 2 2v7h3");
}

.m44kqpqtt {
  d: path("M13 3h3v7l2 2 -2 2v7h-3");
}

.ngd7vsbzs {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M11 3H8v7l-2 2 2 2v7h3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.rrpphhq3o {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M13 3h3v7l2 2 -2 2v7h-3");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="ngd7vsbzs"/><path class="rrpphhq3o"/><path class="j-uhg7vsc"/><path class="m44kqpqtt"/></g>`,
		"fallback": "iconmind:braces-duotone-regular",
	});
}

export default Component;
