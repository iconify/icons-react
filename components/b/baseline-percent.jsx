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
		"content": `<style>.vvpx_-bae {
  fill: currentColor;
  d: path("M7.5 11C9.43 11 11 9.43 11 7.5S9.43 4 7.5 4S4 5.57 4 7.5S5.57 11 7.5 11m0-5C8.33 6 9 6.67 9 7.5S8.33 9 7.5 9S6 8.33 6 7.5S6.67 6 7.5 6M4.002 18.583L18.59 3.996l1.414 1.414L5.417 19.997zM16.5 13c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5s-1.57-3.5-3.5-3.5m0 5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5");
}
</style><path class="vvpx_-bae"/>`,
		"fallback": "ic:baseline-percent",
	});
}

export default Component;
