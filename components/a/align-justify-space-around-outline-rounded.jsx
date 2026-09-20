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
		"content": `<style>.oyo461bbk {
  fill: currentColor;
  d: path("M16.308 16.5q-.344 0-.576-.232t-.232-.576V8.308q0-.343.232-.576t.576-.232h.384q.344 0 .576.232t.232.576v7.384q0 .344-.232.576t-.576.232zm-9 0q-.344 0-.576-.232t-.232-.576V8.308q0-.343.232-.576t.576-.232h.384q.343 0 .576.232t.232.576v7.384q0 .344-.232.576t-.576.232zm12.835 4.356Q20 20.713 20 20.5v-17q0-.213.144-.356T20.501 3t.356.144T21 3.5v17q0 .213-.144.356t-.357.144t-.356-.144M3.5 21q-.213 0-.356-.144T3 20.5v-17q0-.213.144-.356T3.501 3t.356.144T4 3.5v17q0 .213-.144.356T3.499 21");
}
</style><path class="oyo461bbk"/>`,
		"fallback": "material-symbols-light:align-justify-space-around-outline-rounded",
	});
}

export default Component;
