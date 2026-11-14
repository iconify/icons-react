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
		"content": `<style>.de358v1wh {
  d: path("M10 11a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-4 5v5m8-5l7.5 5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.owcl2jbzd {
  d: path("m4.187 8.975l6.75-5.162a1.75 1.75 0 0 1 2.126 0l6.75 5.162a1.75 1.75 0 0 1 .687 1.39v3.885A1.75 1.75 0 0 1 18.75 16H5.25a1.75 1.75 0 0 1-1.75-1.75v-3.885a1.75 1.75 0 0 1 .687-1.39");
}
</style><g class="hntgybcog"><path class="owcl2jbzd"/><path class="de358v1wh"/></g>`,
		"fallback": "uix:chicken-coop",
	});
}

export default Component;
