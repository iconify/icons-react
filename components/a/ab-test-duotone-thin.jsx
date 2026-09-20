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
		"content": `<style>.fg8libqda {
  d: path("M4 19a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.hepb9_31m {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m12 10 -6 6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jz0b4rbqp {
  fill: currentColor;
  d: path("M4 19a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.kbcu0ebrl {
  d: path("m12 10 6 6");
}

.nnwao2bjn {
  d: path("M12 3v7");
}

.pw61xnbei {
  d: path("M16 19a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.st2iv5bfu {
  fill: currentColor;
  d: path("M16 19a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.swswz9tfp {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M12 3v7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.tfzdxif4b {
  d: path("m12 10 -6 6");
}

.uetwniz9t {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m12 10 6 6");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="jz0b4rbqp"/><path class="st2iv5bfu"/><path class="swswz9tfp"/><path class="hepb9_31m"/><path class="uetwniz9t"/><path class="nnwao2bjn"/><path class="tfzdxif4b"/><path class="kbcu0ebrl"/><path class="fg8libqda"/><path class="pw61xnbei"/></g>`,
		"fallback": "iconmind:ab-test-duotone-thin",
	});
}

export default Component;
