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
		"content": `<style>.dt7y3rbea {
  cx: 6.5px;
  cy: 19.5px;
  r: 1.25px;
}

.fbp8fgpqp {
  cx: 17.5px;
  cy: 19.5px;
  r: 1.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jcxm0gmcx {
  cx: 12px;
  cy: 19.5px;
  r: 1.25px;
}

.o-_1o3beq {
  cx: 6.5px;
  cy: 4.5px;
  r: 1.25px;
}

.ou244bblc {
  cx: 12px;
  cy: 4.5px;
  r: 1.25px;
}

.pm8fpccke {
  width: 16.5px;
  height: 5.5px;
  x: 3.75px;
  y: 9.25px;
  rx: 2.25px;
}

.u38whcbki {
  cx: 17.5px;
  cy: 4.5px;
  r: 1.25px;
}
</style><g class="hntgybcog"><rect class="pm8fpccke"/><circle class="o-_1o3beq"/><circle class="ou244bblc"/><circle class="u38whcbki"/><circle class="dt7y3rbea"/><circle class="jcxm0gmcx"/><circle class="fbp8fgpqp"/></g>`,
		"fallback": "iconoven:boardroom",
	});
}

export default Component;
