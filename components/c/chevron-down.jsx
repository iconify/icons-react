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
		"content": `<style>.zxi-0ibeq {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m19.03 9.53l-6.5 6.5q-.052.053-.113.094t-.13.069t-.141.043t-.146.014t-.146-.014q-.073-.015-.141-.043t-.13-.069t-.113-.094l-6.5-6.5q-.106-.105-.163-.243T4.75 9t.057-.287t.163-.243q.052-.053.113-.094t.13-.069t.141-.043t.146-.014t.146.014q.073.015.141.043t.13.069q.061.041.113.094L12 14.439l5.97-5.969q.052-.053.113-.094t.13-.069t.141-.043t.146-.014t.146.014q.073.015.141.043t.13.069q.061.041.113.094q.106.105.163.243T19.25 9t-.057.287t-.163.243");
}
</style><path class="zxi-0ibeq"/>`,
		"fallback": "uix-solid:chevron-down",
	});
}

export default Component;
