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
		"content": `<style>.of6ru5jdi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 17.5V16c-2-1.2-3.25-3.1-3.25-5.5a6.25 6.25 0 0 1 12.5 0c0 2.4-1.25 4.3-3.25 5.5v1.5Zm.5 3.5h5M12 7.75v5.5M9.25 10.5h5.5");
}
</style><path class="of6ru5jdi"/>`,
		"fallback": "uix:feature-request",
	});
}

export default Component;
