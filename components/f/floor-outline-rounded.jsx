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
		"content": `<style>.roil36c4w {
  fill: currentColor;
  d: path("M7 20.5v-3.692q0-.344.232-.576T7.808 16H11.5v-3.692q0-.343.232-.576t.576-.232H16V7.808q0-.343.232-.576T16.808 7H20.5V4q0-.213.144-.356t.357-.144t.356.144T21.5 4v3.192q0 .343-.232.576T20.692 8H17v3.692q0 .343-.232.576t-.576.232H12.5v3.692q0 .344-.232.576t-.576.232H8v3.692q0 .344-.232.576t-.576.232H4q-.213 0-.356-.144t-.144-.357t.144-.356T4 20.5z");
}
</style><path class="roil36c4w"/>`,
		"fallback": "material-symbols-light:floor-outline-rounded",
	});
}

export default Component;
