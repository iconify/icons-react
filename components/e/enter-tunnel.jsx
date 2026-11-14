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
		"content": `<style>.dl3_mccoq {
  d: path("M2.5 21.5V12a9.5 9.5 0 0 1 19 0v9.5");
}

.ssh8mqvlp {
  d: path("M6.5 19.5v-4l2-4h7l2 4v4Zm0-4h11");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="dl3_mccoq"/><path class="ssh8mqvlp"/></g>`,
		"fallback": "uix-sharp:enter-tunnel",
	});
}

export default Component;
