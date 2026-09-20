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
		"content": `<style>.poqc-168f {
  fill: currentColor;
  d: path("M3.5 21q-.213 0-.356-.144T3 20.499t.144-.356T3.5 20h17q.213 0 .356.144t.144.357t-.144.356T20.5 21zm4.808-10.5q-.343 0-.576-.232T7.5 9.692v-.384q0-.343.232-.576t.576-.232h7.384q.344 0 .576.232t.232.576v.384q0 .344-.232.576t-.576.232zm0 6q-.343 0-.576-.232t-.232-.576v-.384q0-.343.232-.576t.576-.232h7.384q.344 0 .576.232t.232.576v.384q0 .344-.232.576t-.576.232z");
}
</style><path class="poqc-168f"/>`,
		"fallback": "material-symbols-light:align-end-rounded",
	});
}

export default Component;
