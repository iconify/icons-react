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
		"content": `<style>.hdactn3_r {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M4.752 4.752Q1.75 7.754 1.75 12t3.002 7.248T12 22.25t7.248-3.002T22.25 12t-3.002-7.248T12 1.75T4.752 4.752M12.53 14.78q-.105.106-.243.163T12 15t-.287-.057t-.243-.163l-4-4q-.106-.105-.163-.243t-.057-.287t.057-.287t.163-.243q.052-.053.113-.094t.13-.069t.141-.043T8 9.5t.146.014q.073.015.141.043t.13.069t.113.094L12 13.189l3.47-3.469q.052-.053.113-.094t.13-.069t.141-.043T16 9.5t.146.014q.073.015.141.043t.13.069q.061.041.113.094q.106.105.163.243t.057.287t-.057.287t-.163.243z");
}
</style><path class="hdactn3_r"/>`,
		"fallback": "uix-solid:chevron-down-circle",
	});
}

export default Component;
