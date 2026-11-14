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
		"content": `<style>.tvt-1rcpo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m19 3l-7.5 9.75m-.523-.327l1.557.973a1.75 1.75 0 0 1 .805 1.732l-.624 4.369A1.75 1.75 0 0 1 10.982 21H6.675a1.75 1.75 0 0 1-1.48-2.684l3.375-5.343a1.75 1.75 0 0 1 2.407-.55M2.5 21h19m-1.689-7.439l.628.628a1.5 1.5 0 0 1 0 2.122l-.628.628a1.5 1.5 0 0 1-2.122 0l-.628-.628a1.5 1.5 0 0 1 0-2.122l.628-.628a1.5 1.5 0 0 1 2.122 0");
}
</style><path class="tvt-1rcpo"/>`,
		"fallback": "uix:floor-sweep",
	});
}

export default Component;
