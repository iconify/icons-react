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
		"content": `<style>.hr_cldm_k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 4.5h18V21H3Zm5-2v4m8-4v4m-10 3h5.5M9.25 13h5.5m-2.25 3.5H18");
}
</style><path class="hr_cldm_k"/>`,
		"fallback": "uix-sharp:crew-schedule",
	});
}

export default Component;
