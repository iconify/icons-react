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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ped7-i-ni {
  d: path("M6.5 17.5a8.5 8.5 0 1 0-2-2.5l-1.25 5.25Z");
}

.qu6ygdbue {
  d: path("m12.625 8.125l.264.581a1.5 1.5 0 0 0 1.23.873l.558.051a.569.569 0 0 1 .323.995l-.371.324a1.5 1.5 0 0 0-.492 1.376l.123.737a.673.673 0 0 1-1.01.688l-.478-.287a1.5 1.5 0 0 0-1.544 0l-.478.287a.673.673 0 0 1-1.01-.688l.123-.737a1.5 1.5 0 0 0-.492-1.376L9 10.625a.569.569 0 0 1 .323-.995l.558-.051a1.5 1.5 0 0 0 1.23-.873l.264-.581a.687.687 0 0 1 1.25 0");
}
</style><g class="hntgybcog"><path class="ped7-i-ni"/><path class="qu6ygdbue"/></g>`,
		"fallback": "uix:event-feedback",
	});
}

export default Component;
