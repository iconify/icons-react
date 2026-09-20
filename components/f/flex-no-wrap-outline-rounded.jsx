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
		"content": `<style>.f2vds6byi {
  fill: currentColor;
  d: path("M2 15.48V8.52q0-.344.232-.576t.576-.233h3.154q.343 0 .575.233t.232.575v6.962q0 .343-.232.575t-.575.233H2.808q-.343 0-.576-.233T2 15.481m7.616 0V8.519q0-.343.232-.575q.232-.233.575-.233h3.154q.343 0 .576.233q.231.232.231.575v6.962q0 .343-.232.575q-.232.233-.575.233h-3.154q-.343 0-.575-.233q-.232-.232-.232-.575m7.615 0V8.519q0-.343.232-.575t.576-.233h3.153q.344 0 .576.233t.232.575v6.962q0 .343-.232.575t-.576.233h-3.154q-.343 0-.575-.233t-.232-.575M3 15.288h2.77V8.712H3zm15.423 0H21V8.712h-2.577z");
}
</style><path class="f2vds6byi"/>`,
		"fallback": "material-symbols-light:flex-no-wrap-outline-rounded",
	});
}

export default Component;
