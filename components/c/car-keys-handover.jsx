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
		"content": `<style>.ql6l0-2gb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 3h7a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm-6 13.25h3l3.5 3.5h7.5L20.75 16A1.25 1.25 0 0 0 19 14.25L15.75 17H11.5M12 6.75h.01m-.01 3.5h.01");
}
</style><path class="ql6l0-2gb"/>`,
		"fallback": "uix-sharp:car-keys-handover",
	});
}

export default Component;
