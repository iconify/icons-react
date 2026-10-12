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

.gtjl-bcuc {
  width: 3px;
  height: 3.5px;
  x: 18.25px;
  y: 5px;
  rx: 1px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x0xmx3bta {
  d: path("M11 5.75L8.75 10h3.5L10 14.25m-6.25 6h12.5m-1.5-10.5h1a1.5 1.5 0 0 1 1.5 1.5v5a1.25 1.25 0 0 0 2.5 0V8.5m0-3.5V3");
}
</style><g class="hntgybcog"><path class="fc402mqte"/><path class="x0xmx3bta"/><rect class="gtjl-bcuc"/></g>`,
		"fallback": "iconoven:charging-point",
	});
}

export default Component;
