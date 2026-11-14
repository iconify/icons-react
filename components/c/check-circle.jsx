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
		"content": `<style>.t9bhv8bav {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M4.752 4.752Q1.75 7.754 1.75 12t3.002 7.248T12 22.25t7.248-3.002T22.25 12t-3.002-7.248T12 1.75T4.752 4.752m6.198 9.637l4.474-5.369q.047-.057.105-.103q.057-.047.122-.081q.066-.034.137-.055t.144-.028t.147.001t.144.03q.071.022.136.057q.064.036.121.083t.103.105t.081.122q.034.066.055.137t.028.144t-.001.147t-.03.144t-.057.136q-.036.064-.083.121l-5 6q-.022.026-.046.05q-.052.053-.113.094t-.13.069t-.141.043t-.146.014t-.146-.014q-.073-.015-.141-.043t-.13-.069t-.113-.094l-3-3q-.106-.105-.163-.243T7.25 12.5t.057-.287t.163-.243q.052-.053.113-.094t.13-.069t.141-.043T8 11.75t.146.014q.073.015.141.043t.13.069t.113.094z");
}
</style><path class="t9bhv8bav"/>`,
		"fallback": "uix-solid:check-circle",
	});
}

export default Component;
