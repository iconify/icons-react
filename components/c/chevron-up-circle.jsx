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
		"content": `<style>.b0c_c7brc {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M4.752 4.752Q1.75 7.754 1.75 12t3.002 7.248T12 22.25t7.248-3.002T22.25 12t-3.002-7.248T12 1.75T4.752 4.752M11.47 9.22q.105-.106.243-.163T12 9t.287.057t.243.163l4 4q.106.105.163.243t.057.287t-.057.287t-.163.243q-.052.053-.113.094t-.13.069t-.141.043T16 14.5t-.146-.014q-.073-.015-.141-.043t-.13-.069t-.113-.094L12 10.811L8.53 14.28q-.052.053-.113.094t-.13.069t-.141.043T8 14.5t-.146-.014q-.073-.015-.141-.043t-.13-.069q-.061-.041-.113-.094q-.106-.105-.163-.243t-.057-.287t.057-.287t.163-.243z");
}
</style><path class="b0c_c7brc"/>`,
		"fallback": "uix-solid:chevron-up-circle",
	});
}

export default Component;
