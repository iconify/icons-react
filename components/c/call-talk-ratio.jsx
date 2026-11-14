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
		"content": `<style>.w7xk4_b6a {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M5 2.25Q2.25 2.25 2.25 5v12q0 .149.057.287t.163.243q.052.053.113.094t.13.069t.141.043t.146.014t.146-.014q.073-.015.141-.043t.13-.069t.113-.094l2.781-2.78H12q2.75 0 2.75-2.75V5q0-2.75-2.75-2.75zM16 12q0-2.75 2.75-2.75h.75q2.75 0 2.75 2.75v8.5q0 .074-.014.146q-.015.073-.043.141t-.069.13q-.041.061-.094.113q-.052.053-.113.094t-.13.069t-.141.043t-.146.014q-.149 0-.287-.057t-.243-.163l-2.281-2.28Q16 18.719 16 16z");
}
</style><path class="w7xk4_b6a"/>`,
		"fallback": "uix-solid:call-talk-ratio",
	});
}

export default Component;
