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

.inwampuqi {
  d: path("M6.25 14.75V16a1.5 1.5 0 0 0 1.5 1.5H9a1.139 1.139 0 0 0 .805-1.945l-1.61-1.61a1.139 1.139 0 0 0-1.945.805M11 12.5l1.25-3.25l6-6l2 2l-6 6Zm1.25-3.25l2 2");
}

.pbm8n2bsi {
  d: path("M2.75 7.225V19.25A1.75 1.75 0 0 0 4.5 21h12.025a1.75 1.75 0 0 0 1.238-2.987L5.737 5.987A1.75 1.75 0 0 0 2.75 7.225");
}
</style><g class="hntgybcog"><path class="pbm8n2bsi"/><path class="inwampuqi"/></g>`,
		"fallback": "uix:architect-studio",
	});
}

export default Component;
