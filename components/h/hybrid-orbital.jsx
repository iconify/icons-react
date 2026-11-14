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
		"content": `<style>.rz-hx6bzl {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m9.304 6.035l1.669 5.215H5.775q-1.562-.098-2.536 1.134q-.982 1.243-.51 2.755q.473 1.513 1.988 1.975t2.752-.528l2.85-2.281l-1.006 2.641q-.74 1.477.125 2.896q.877 1.439 2.562 1.439t2.562-1.439q.865-1.419.125-2.896l-1.006-2.641l2.85 2.28q1.236.991 2.752.529t1.988-1.975t-.51-2.755q-.974-1.232-2.536-1.134h-5.198l1.669-5.215q.725-1.467-.134-2.877Q13.685 1.719 12 1.719T9.438 3.158q-.859 1.41-.134 2.877");
}
</style><path class="rz-hx6bzl"/>`,
		"fallback": "uix-solid:hybrid-orbital",
	});
}

export default Component;
