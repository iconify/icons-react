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
		"content": `<style>.a_-q_pb0z {
  width: 18.5px;
  height: 18.5px;
  x: 2.75px;
  y: 2.75px;
  rx: 3px;
}

.cztxjzpba {
  d: path("m12.45 10.83l1.52-3.97q.44-1.16 1.42-.38l1.26 1.01q.98.78-.07 1.47l-3.54 2.35q-1.04.69-.59-.48m.72 1.62l3.97 1.52q1.16.44.38 1.42l-1.01 1.26q-.78.98-1.47-.07l-2.35-3.54q-.69-1.04.48-.59m-1.62.72l-1.52 3.97q-.44 1.16-1.42.38l-1.26-1.01q-.98-.78.07-1.47l3.54-2.35q1.04-.69.59.48m-.72-1.62l-3.97-1.52q-1.16-.44-.38-1.42l1.01-1.26q.78-.98 1.47.07l2.35 3.54q.69 1.04-.48.59");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><rect class="a_-q_pb0z"/><path class="cztxjzpba"/></g>`,
		"fallback": "iconoven:cooling-fan",
	});
}

export default Component;
