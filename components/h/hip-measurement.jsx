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

.rb-nnp8lw {
  d: path("M9.125 6.625za1.237 1.237 0 0 0 0 1.75a.513.513 0 0 0 .875-.362V6.987a.513.513 0 0 0-.875-.362m5.75 0za1.237 1.237 0 0 1 0 1.75a.513.513 0 0 1-.875-.362V6.987a.513.513 0 0 1 .875-.362");
}

.uqk735lfa {
  d: path("M5 2.5h14l1.5 19h-6L12 11L9.5 21.5h-6Zm3.25 5h7.5");
}
</style><g class="hntgybcog"><path class="uqk735lfa"/><path class="rb-nnp8lw"/></g>`,
		"fallback": "uix:hip-measurement",
	});
}

export default Component;
