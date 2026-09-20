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
		"content": `<style>.ejtyvbbdg {
  d: path("M17 15v4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pbz4y6llk {
  d: path("M5 13v6");
}

.rkhcgsbdl {
  d: path("M3 19h18");
}

.t4vjq-bqk {
  d: path("m4 9 4 -4 4 4 4 -4 4 4");
}

.xqz890wro {
  d: path("M11 12v7");
}
</style><g class="hntgybcog"><path class="pbz4y6llk"/><path class="xqz890wro"/><path class="ejtyvbbdg"/><path class="rkhcgsbdl"/><path class="t4vjq-bqk"/></g>`,
		"fallback": "iconmind:chart-combo-outline-thin",
	});
}

export default Component;
