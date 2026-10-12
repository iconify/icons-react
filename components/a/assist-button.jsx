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
		"content": `<style>.dnp2npbye {
  width: 14.5px;
  height: 18.5px;
  x: 4.75px;
  y: 2.75px;
  rx: 2.5px;
}

.fq1tmw63v {
  cx: 12px;
  cy: 10.5px;
  r: 4px;
}

.hboedzb0t {
  d: path("M9 17.75h6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><rect class="dnp2npbye"/><circle class="fq1tmw63v"/><path class="hboedzb0t"/></g>`,
		"fallback": "iconoven:assist-button",
	});
}

export default Component;
