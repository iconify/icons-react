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
		"content": `<style>.zsl8wmbfe {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M6.166 4.166Q3.75 6.583 3.75 10t2.416 5.834q2.147 2.146 5.084 2.386v2.53H8q-.074 0-.146.014q-.073.015-.141.043t-.13.069q-.061.041-.113.094q-.053.052-.094.113t-.069.13t-.043.141t-.014.146q0 .074.014.146q.015.073.043.141t.069.13q.041.061.094.113q.052.053.113.094t.13.069t.141.043t.146.014h8q.074 0 .146-.014q.073-.015.141-.043t.13-.069q.061-.041.113-.094q.053-.052.094-.113t.069-.13t.043-.141t.014-.146q0-.074-.014-.146q-.015-.073-.043-.141t-.069-.13q-.041-.061-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043T16 20.75h-3.25v-2.53q2.937-.24 5.084-2.386Q20.25 13.417 20.25 10t-2.416-5.834T12 1.75T6.166 4.166m1.945 1.945Q9.722 4.5 12 4.5t3.889 1.611T17.5 10t-1.611 3.889T12 15.5t-3.889-1.611T6.5 10t1.611-3.889");
}
</style><path class="zsl8wmbfe"/>`,
		"fallback": "uix-solid:fresnel-light",
	});
}

export default Component;
