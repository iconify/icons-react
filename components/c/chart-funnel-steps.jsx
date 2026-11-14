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
		"content": `<style>.n3ik-4bkt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3h19v5h-3v5.5h-3V18h-2v3.5h-3V18h-2v-4.5h-3V8h-3Zm3 5h13m-10 5.5h7");
}
</style><path class="n3ik-4bkt"/>`,
		"fallback": "uix-sharp:chart-funnel-steps",
	});
}

export default Component;
