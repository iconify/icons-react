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
		"content": `<style>.b5kbv67xa {
  d: path("M6.625 3h10.75A2.625 2.625 0 0 1 20 5.625v11.25a2.625 2.625 0 0 1-2.625 2.625H6.625A2.625 2.625 0 0 1 4 16.875V5.625A2.625 2.625 0 0 1 6.625 3M2.5 19.5h19");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qj98ee9vm {
  d: path("M8.5 11.5a2.5 2.5 0 0 1 .75-4.75a3 3 0 0 1 5.5 0a2.5 2.5 0 0 1 .75 4.75Zm3.5 0v8");
}
</style><g class="hntgybcog"><path class="b5kbv67xa"/><path class="qj98ee9vm"/></g>`,
		"fallback": "uix:garden-view",
	});
}

export default Component;
