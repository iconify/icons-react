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
		"content": `<style>.f7xz0gbem {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M6.875 6.25h7.75q2.123 0 3.624 1.501t1.501 3.624v1.25q0 2.123-1.501 3.624t-3.624 1.501h-7.75q-2.123 0-3.624-1.501T1.75 12.625v-1.25q0-2.123 1.501-3.624T6.875 6.25M6.25 14.5q0 .074.014.146q.015.073.043.141t.069.13t.094.113q.052.053.113.094t.13.069t.141.043t.146.014q7.75 0 7.75-5.75q0-.074-.014-.146q-.015-.073-.043-.141t-.069-.13t-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043T14 8.75q-7.75 0-7.75 5.75m16-1v-3q0-.074-.014-.146q-.015-.073-.043-.141t-.069-.13t-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043t-.146-.014t-.146.014q-.073.015-.141.043t-.13.069q-.061.041-.113.094q-.053.052-.094.113t-.069.13t-.043.141t-.014.146v3q0 .074.014.146q.015.073.043.141t.069.13t.094.113q.052.053.113.094t.13.069t.141.043t.146.014t.146-.014q.073-.015.141-.043t.13-.069q.061-.041.113-.094q.053-.052.094-.113t.069-.13t.043-.141t.014-.146");
}
</style><path class="f7xz0gbem"/>`,
		"fallback": "uix-solid:battery-saver",
	});
}

export default Component;
