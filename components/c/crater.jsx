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
		"content": `<style>.m6m7ftbzj {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M1.75 12q0-4.246 3.002-7.248T12 1.75t7.248 3.002T22.25 12t-3.002 7.248T12 22.25t-7.248-3.002T1.75 12M9 5.25Q5.25 5.25 5.25 9T9 12.75T12.75 9T9 5.25M13 15q0 2.5 2.5 2.5T18 15t-2.5-2.5T13 15");
}
</style><path class="m6m7ftbzj"/>`,
		"fallback": "uix-solid:crater",
	});
}

export default Component;
