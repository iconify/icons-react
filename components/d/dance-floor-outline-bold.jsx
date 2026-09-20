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
		"content": `<style>.iqy6wdsji {
  d: path("M8 16h7v5H8Z");
}

.oz614acod {
  d: path("M13 7h7v6h-7Z");
}

.po47_2bjy {
  d: path("M3 7h7v6H3Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="po47_2bjy"/><path class="oz614acod"/><path class="iqy6wdsji"/></g>`,
		"fallback": "iconmind:dance-floor-outline-bold",
	});
}

export default Component;
