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
		"content": `<style>.eaczzeban {
  cx: 19px;
  cy: 6.5px;
  r: 2.25px;
}

.gsr9mu7_h {
  d: path("M5 8.75v4a2.5 2.5 0 0 0 2.5 2.5h9a2.5 2.5 0 0 0 2.5-2.5v-4M2.75 21.25h18.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v-nshmb6z {
  cx: 5px;
  cy: 6.5px;
  r: 2.25px;
}
</style><g class="hntgybcog"><circle class="v-nshmb6z"/><circle class="eaczzeban"/><path class="gsr9mu7_h"/></g>`,
		"fallback": "iconoven:grab-bar",
	});
}

export default Component;
