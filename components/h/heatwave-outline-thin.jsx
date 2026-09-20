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
		"content": `<style>.aho1hjbgy {
  d: path("M5 8h2.5");
}

.e6h0tjbiq {
  d: path("M8 8a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.p-qzc1t-u {
  d: path("M4 16h8a3 3 0 1 1 -3 3");
}

.qcyhweblp {
  d: path("M16.5 8H19");
}

.uih_zvhtv {
  d: path("M4 21h16");
}
</style><g class="hntgybcog"><path class="e6h0tjbiq"/><path class="aho1hjbgy"/><path class="qcyhweblp"/><path class="p-qzc1t-u"/><path class="uih_zvhtv"/></g>`,
		"fallback": "iconmind:heatwave-outline-thin",
	});
}

export default Component;
