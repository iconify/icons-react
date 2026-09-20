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
		"content": `<style>.es-8_jb_y {
  fill: currentColor;
  d: path("M13 7h7v6h-7Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.iqy6wdsji {
  d: path("M8 16h7v5H8Z");
}

.oz614acod {
  d: path("M13 7h7v6h-7Z");
}

.po47_2bjy {
  d: path("M3 7h7v6H3Z");
}

.q_xymip_v {
  fill: currentColor;
  d: path("M8 16h7v5H8Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.rgm5-92up {
  fill: currentColor;
  d: path("M3 7h7v6H3Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="rgm5-92up"/><path class="es-8_jb_y"/><path class="q_xymip_v"/><path class="po47_2bjy"/><path class="oz614acod"/><path class="iqy6wdsji"/></g>`,
		"fallback": "iconmind:dance-floor-duotone-thin",
	});
}

export default Component;
