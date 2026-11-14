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
		"content": `<style>.h39iyofcp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12.551 3.867l.202.409a1.5 1.5 0 0 0 1.129.82l.452.066a.615.615 0 0 1 .341 1.048l-.327.319a1.5 1.5 0 0 0-.431 1.328l.077.45a.615.615 0 0 1-.892.647l-.404-.212a1.5 1.5 0 0 0-1.396 0l-.404.212a.615.615 0 0 1-.892-.647l.077-.45a1.5 1.5 0 0 0-.431-1.328l-.327-.319a.615.615 0 0 1 .341-1.048l.452-.066a1.5 1.5 0 0 0 1.129-.82l.202-.409a.615.615 0 0 1 1.102 0M4 13.375l.141-.388A1.5 1.5 0 0 1 5.551 12h12.898a1.5 1.5 0 0 1 1.41.987l.141.388a1.025 1.025 0 0 1-.963 1.375H4.963A1.025 1.025 0 0 1 4 13.375m1 1.375v6.75h5v-3.25h4v3.25h5v-6.75M8.5 12v2.75M12 12v2.75M15.5 12v2.75");
}
</style><path class="h39iyofcp"/>`,
		"fallback": "uix:flagship-store",
	});
}

export default Component;
