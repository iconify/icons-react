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
		"content": `<style>.c4axibc2h {
  d: path("M8 3v4");
}

.dgamp4bkk {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m4 14 5 5L20 8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.fyea5htjc {
  d: path("M4 3v4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kvle2skfl {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 3v4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ns4jmsbxl {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M8 3v4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.uo9ro-b5p {
  d: path("m4 14 5 5L20 8");
}
</style><g class="hntgybcog"><path class="kvle2skfl"/><path class="ns4jmsbxl"/><path class="dgamp4bkk"/><path class="fyea5htjc"/><path class="c4axibc2h"/><path class="uo9ro-b5p"/></g>`,
		"fallback": "iconmind:citation-check-duotone-thin",
	});
}

export default Component;
