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
		"content": `<style>.ovl8jhedh {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M3 9.25h18q.074 0 .146.014q.073.015.141.043t.13.069q.061.041.113.094q.053.052.094.113t.069.13t.043.141t.014.146q0 4.389-2.835 7.333Q16.106 20.25 12 20.25t-6.915-2.917Q2.25 14.389 2.25 10q0-.074.014-.146q.015-.073.043-.141t.069-.13t.094-.113q.052-.053.113-.094t.13-.069t.141-.043T3 9.25");
}
</style><path class="ovl8jhedh"/>`,
		"fallback": "uix-solid:bowl-empty",
	});
}

export default Component;
