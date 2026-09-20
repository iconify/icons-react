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
		"content": `<style>.bnrf8ghpe {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 4h16v12H4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.crv4i00bu {
  d: path("M4 3v18");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jm7hx9ium {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M8 10v3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.kow2ilbqy {
  d: path("M8 10v3");
}

.kp58endie {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M11 8v5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.l88mc43pg {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M14 6v7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.lulmb9b1a {
  d: path("M4 4h16v12H4");
}

.vpuel0dtu {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 3v18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.y40ry_bij {
  d: path("M14 6v7");
}

.zos4srk3e {
  d: path("M11 8v5");
}
</style><g class="hntgybcog"><path class="vpuel0dtu"/><path class="bnrf8ghpe"/><path class="jm7hx9ium"/><path class="kp58endie"/><path class="l88mc43pg"/><path class="crv4i00bu"/><path class="lulmb9b1a"/><path class="kow2ilbqy"/><path class="zos4srk3e"/><path class="y40ry_bij"/></g>`,
		"fallback": "iconmind:flag-rollout-duotone-thin",
	});
}

export default Component;
