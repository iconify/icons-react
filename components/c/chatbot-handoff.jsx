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
		"content": `<style>.k8_ssj_gq {
  d: path("M2.5 10.5h8V18h-8ZM15.25 12a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm-1.75 8c0-2.25 1.75-3 4-3s4 .75 4 3M5.25 14.25h.01m2.49 0h.01");
}

.nf06zdb_a {
  d: path("M6.5 10.5c0-7.5 11-7.5 11-3.5m-2-2l2 2l2-2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="k8_ssj_gq"/><path class="nf06zdb_a"/></g>`,
		"fallback": "uix-sharp:chatbot-handoff",
	});
}

export default Component;
