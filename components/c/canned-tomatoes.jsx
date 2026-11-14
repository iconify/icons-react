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
		"content": `<style>.an7bdh8ts {
  d: path("M4.5 5.5a7.5 2.25 0 1 0 15 0a7.5 2.25 0 1 0-15 0");
}

.czbqpcc_w {
  d: path("M12 11.75q.5-1 2-1.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.iealp8bgl {
  d: path("M8.75 15a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0");
}

.r4xl3mbcl {
  d: path("M4.5 5.5v13a7.5 2.5 0 0 0 15 0v-13");
}
</style><g class="hntgybcog"><path class="an7bdh8ts"/><path class="r4xl3mbcl"/><path class="iealp8bgl"/><path class="czbqpcc_w"/></g>`,
		"fallback": "uix:canned-tomatoes",
	});
}

export default Component;
