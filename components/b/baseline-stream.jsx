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
		"content": `<style>.cpa8pz1nt {
  cx: 20px;
  cy: 12px;
  r: 2px;
  fill: currentColor;
}

.g8ll7b7pf {
  cx: 4px;
  cy: 12px;
  r: 2px;
  fill: currentColor;
}

.ji98rfblk {
  fill: currentColor;
  d: path("M10.05 8.59L6.03 4.55h-.01l-.31-.32l-1.42 1.41l4.02 4.05l.01-.01l.31.32zm3.893.027l4.405-4.392L19.76 5.64l-4.405 4.393zM10.01 15.36l-1.42-1.41l-4.03 4.01l-.32.33l1.41 1.41l4.03-4.02zm9.75 2.94l-3.99-4.01l-.36-.35L14 15.35l3.99 4.01l.35.35z");
}

.n3_7dmu3k {
  cx: 12px;
  cy: 20px;
  r: 2px;
  fill: currentColor;
}

.yfz3w9lrl {
  cx: 12px;
  cy: 4px;
  r: 2px;
  fill: currentColor;
}
</style><circle class="cpa8pz1nt"/><circle class="g8ll7b7pf"/><circle class="n3_7dmu3k"/><path class="ji98rfblk"/><circle class="yfz3w9lrl"/>`,
		"fallback": "ic:baseline-stream",
	});
}

export default Component;
