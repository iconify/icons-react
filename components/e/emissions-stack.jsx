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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n4tbcbbac {
  cx: 11px;
  cy: 5.25px;
  r: 2.5px;
}

.s9o19obtj {
  d: path("m5.1 20.51l1.3-9.77q.1-.74.85-.74h2.5q.75 0 .85.74l1.3 9.77q.1.74-.65.74h-5.5q-.75 0-.65-.74M6.25 14h4.5");
}

.yssow-b-l {
  cx: 18.5px;
  cy: 5px;
  r: 2px;
}
</style><g class="hntgybcog"><path class="s9o19obtj"/><circle class="n4tbcbbac"/><circle class="yssow-b-l"/></g>`,
		"fallback": "iconoven:emissions-stack",
	});
}

export default Component;
