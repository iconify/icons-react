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
		"content": `<style>.ehqt4hbmy {
  d: path("m7.939 10.061l3-3a1.5 1.5 0 0 1 2.122 0l3 3a1.5 1.5 0 0 1 .439 1.06V13a1.5 1.5 0 0 1-1.5 1.5H9A1.5 1.5 0 0 1 7.5 13v-1.879a1.5 1.5 0 0 1 .439-1.06");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i1fons8-r {
  d: path("M10.75 14.5v-2.25h2.5v2.25m1.5-5.75v-2");
}

.tdo0-wb3y {
  d: path("M2.5 5A2.5 2.5 0 0 1 5 2.5h14A2.5 2.5 0 0 1 21.5 5v10a2.5 2.5 0 0 1-2.5 2.5h-8L6.5 21v-3.5H5A2.5 2.5 0 0 1 2.5 15Z");
}
</style><g class="hntgybcog"><path class="tdo0-wb3y"/><path class="ehqt4hbmy"/><path class="i1fons8-r"/></g>`,
		"fallback": "uix:contact-agent",
	});
}

export default Component;
