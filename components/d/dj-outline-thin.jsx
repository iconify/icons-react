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
		"content": `<style>.dxdpz6gbz {
  d: path("M17 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.it83nbbll {
  d: path("M5 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.ju0sk_7wf {
  d: path("M2 12a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
}

.z9ittvbis {
  d: path("M2 19h20");
}

.ziznm1ama {
  d: path("M14 12a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
}
</style><g class="hntgybcog"><path class="ju0sk_7wf"/><path class="ziznm1ama"/><path class="z9ittvbis"/><path class="it83nbbll"/><path class="dxdpz6gbz"/></g>`,
		"fallback": "iconmind:dj-outline-thin",
	});
}

export default Component;
