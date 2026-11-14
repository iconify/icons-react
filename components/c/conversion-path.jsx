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
		"content": `<style>.afoxwro0d {
  d: path("m19 4.25l2 2l-2 2");
}

.lylnt0bcq {
  d: path("M2.5 19.75H7v-4.5h4.5v-4.5H16v-4.5h5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="lylnt0bcq"/><path class="afoxwro0d"/></g>`,
		"fallback": "uix-sharp:conversion-path",
	});
}

export default Component;
