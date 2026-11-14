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
		"content": `<style>.ayyefobym {
  d: path("M12.376 13.447L8.77 9.841l7.071-7.071l3.889 3.889l-6.788 6.788M15 16.25h6m-1.75-1.75L21 16.25m0 3.5h-6m1.75 1.75L15 19.75");
}

.q4fmhshwh {
  d: path("M12.245 14.144L6.659 19.73L2.77 15.841L9.841 8.77l3.889 3.889l-.778.778");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="q4fmhshwh"/><path class="ayyefobym"/></g>`,
		"fallback": "uix-sharp:chain-switch",
	});
}

export default Component;
