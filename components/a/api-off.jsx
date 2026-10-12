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
		"content": `<style>.dsbyipbjc {
  cx: 4px;
  cy: 12px;
  r: 1.25px;
}

.fkq_fnx9p {
  width: 5.5px;
  height: 5.5px;
  x: 9.25px;
  y: 9.25px;
  rx: 1.5px;
}

.hjru5mbwv {
  cx: 12px;
  cy: 4px;
  r: 1.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hvjhicbar {
  cx: 20px;
  cy: 12px;
  r: 1.25px;
}

.n2he7vj4w {
  cx: 12px;
  cy: 20px;
  r: 1.25px;
}

.rxp-u1bpc {
  d: path("M12 9.25v-3m0 8.5v3M9.25 12h-3m8.5 0h3");
}
</style><g class="hntgybcog"><rect class="fkq_fnx9p"/><path class="rxp-u1bpc"/><circle class="hjru5mbwv"/><circle class="n2he7vj4w"/><circle class="dsbyipbjc"/><circle class="hvjhicbar"/></g>`,
		"fallback": "iconoven:api-off",
	});
}

export default Component;
