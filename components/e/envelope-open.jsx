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
		"content": `<style>.aba5w4h0a {
  d: path("M2.75 11.75L12 17.5l9.25-5.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m_rf5di6i {
  d: path("M2.75 10.75L12 4l9.25 6.75v8.5a2 2 0 0 1-2 2H4.75a2 2 0 0 1-2-2Zm6.25-.5h6m-5 2.5h4");
}
</style><g class="hntgybcog"><path class="m_rf5di6i"/><path class="aba5w4h0a"/></g>`,
		"fallback": "iconoven:envelope-open",
	});
}

export default Component;
