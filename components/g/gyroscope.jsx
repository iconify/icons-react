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
		"content": `<style>.f5tfvfygz {
  d: path("M7.25 11a4.75 1.75 0 1 0 9.5 0a4.75 1.75 0 1 0-9.5 0M12 2.75V18m.32.38l2.11 2.49q.32.38-.18.38h-4.5q-.5 0-.18-.38l2.11-2.49q.32-.38.64 0");
}

.hlaq-qpbp {
  d: path("M12 4a7 7 0 1 1 0 14a7 7 0 1 1 0-14");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="hlaq-qpbp"/><path class="f5tfvfygz"/></g>`,
		"fallback": "iconoven:gyroscope",
	});
}

export default Component;
