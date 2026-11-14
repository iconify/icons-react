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
		"content": `<style>.a5bpmnbry {
  d: path("M2.5 21.5h19M5 21.5v-18h14v18M8 7.5h8m-8 4h8m-8 4h8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wyli5loxo {
  d: path("M10.5 21.5v-3h3v3");
}
</style><g class="ulnmmdpxh"><path class="a5bpmnbry"/><path class="wyli5loxo"/></g>`,
		"fallback": "uix-sharp:datacenter-building",
	});
}

export default Component;
