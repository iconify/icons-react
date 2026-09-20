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
		"content": `<style>.bq4e1jb8b {
  d: path("m7 10 3 3 7 -7");
}

.dk2_9r6pl {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4 18h16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o8od38cnm {
  d: path("M4 18h16");
}

.sl7dojb6g {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m7 10 3 3 7 -7");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="sl7dojb6g"/><path class="dk2_9r6pl"/><path class="bq4e1jb8b"/><path class="o8od38cnm"/></g>`,
		"fallback": "iconmind:assertion-duotone-regular",
	});
}

export default Component;
