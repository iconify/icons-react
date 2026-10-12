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
		"content": `<style>.fc402mqte {
  d: path("M5.25 20.25v-15a2.5 2.5 0 0 1 2.5-2.5h4.5a2.5 2.5 0 0 1 2.5 2.5v15Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jt9uy_bjd {
  d: path("M3.75 20.25h12.5m-1.5-11h1.5a1.5 1.5 0 0 1 1.5 1.5v5.5a1.5 1.5 0 0 0 3 0V8.5L18.25 6");
}

.vqagmfmyj {
  width: 4.5px;
  height: 4px;
  x: 7.75px;
  y: 5.5px;
  rx: 0.75px;
}
</style><g class="hntgybcog"><path class="fc402mqte"/><rect class="vqagmfmyj"/><path class="jt9uy_bjd"/></g>`,
		"fallback": "iconoven:fuel",
	});
}

export default Component;
