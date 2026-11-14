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
		"content": `<style>.cumh34bps {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 13.5C5 11 6 5 8 5.5s-1 8 1 8c1.5 0 2.5-4.5 4.5-4.5c1.088 0 1.124 1.843 1.634 2.854m3.763-1.024c.354-.287.72-.575 1.103-.83M3 17.5h11.3m2.2-2.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m-1.75 6.5c0-1.25 1.5-2.25 3.25-2.25s3.25 1 3.25 2.25");
}
</style><path class="cumh34bps"/>`,
		"fallback": "uix:account-signatory",
	});
}

export default Component;
