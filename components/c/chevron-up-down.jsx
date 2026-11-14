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
		"content": `<style>.n14p8ibpt {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m11.47 4.47l-4.5 4.5q-.106.105-.163.243T6.75 9.5t.057.287t.163.243q.052.053.113.094t.13.069t.141.043t.146.014t.146-.014q.073-.015.141-.043t.13-.069q.061-.041.113-.094L12 6.061l3.97 3.969q.052.053.113.094t.13.069t.141.043t.146.014t.146-.014q.073-.015.141-.043t.13-.069q.061-.041.113-.094q.106-.105.163-.243t.057-.287t-.057-.287t-.163-.243l-4.5-4.5q-.105-.106-.243-.163T12 4.25t-.287.057t-.243.163m-3.44 9.5L12 17.939l3.97-3.969q.052-.053.113-.094t.13-.069t.141-.043t.146-.014t.146.014q.073.015.141.043t.13.069q.061.041.113.094q.106.105.163.243t.057.287t-.057.287t-.163.243l-4.5 4.5q-.052.053-.113.094t-.13.069t-.141.043t-.146.014t-.146-.014q-.073-.015-.141-.043t-.13-.069t-.113-.094l-4.5-4.5q-.106-.105-.163-.243T6.75 14.5t.057-.287t.163-.243q.052-.053.113-.094t.13-.069t.141-.043t.146-.014t.146.014q.073.015.141.043t.13.069q.061.041.113.094");
}
</style><path class="n14p8ibpt"/>`,
		"fallback": "uix-solid:chevron-up-down",
	});
}

export default Component;
