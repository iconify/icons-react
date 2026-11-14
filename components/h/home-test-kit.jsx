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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ua8mlhuda {
  d: path("M4.5 11h15v9a1.5 1.5 0 0 1-1.5 1.5H6A1.5 1.5 0 0 1 4.5 20Z");
}

.wc2fidb9r {
  d: path("m4.076 10.206l-.752-1.412A1.05 1.05 0 0 1 4.25 7.25h.795a1.5 1.5 0 0 1 1.359.866l.659 1.411A1.035 1.035 0 0 1 6.125 11H5.4a1.5 1.5 0 0 1-1.324-.794m15.848 0l.752-1.412a1.05 1.05 0 0 0-.926-1.544h-.795a1.5 1.5 0 0 0-1.359.866l-.659 1.411A1.035 1.035 0 0 0 17.875 11h.725a1.5 1.5 0 0 0 1.324-.794M9.75 3h4.5M10.5 3v8m3-8v8");
}
</style><g class="hntgybcog"><path class="ua8mlhuda"/><path class="wc2fidb9r"/></g>`,
		"fallback": "uix:home-test-kit",
	});
}

export default Component;
