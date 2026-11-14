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
		"content": `<style>.cpr_gdcdm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12C4 7.5 5.75 7.5 7.25 12s3.25 4.5 4.75 0s3.25-4.5 4.75 0s3.25 4.5 4.75 0m-19-6.5h19m-19 13h19");
}
</style><path class="cpr_gdcdm"/>`,
		"fallback": "uix:frequency-band",
	});
}

export default Component;
