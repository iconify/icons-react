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
		"content": `<style>.e3sx4pbxk {
  d: path("M5 10h6v4H5Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pst98pbad {
  d: path("M21 10v4");
}

.x0zb2kp5o {
  fill: currentColor;
  d: path("M5 10h6v4H5Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.xsmo9r1pm {
  fill: currentColor;
  d: path("M2 8a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.zeinpjbcg {
  d: path("M2 8a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}
</style><g class="hntgybcog"><path class="xsmo9r1pm"/><path class="x0zb2kp5o"/><path class="zeinpjbcg"/><path class="pst98pbad"/><path class="e3sx4pbxk"/></g>`,
		"fallback": "iconmind:charge-level-duotone-thin",
	});
}

export default Component;
