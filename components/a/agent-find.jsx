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
		"content": `<style>.n4l6_zbvh {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M5.75 7q0-1.968 1.391-3.359T10.5 2.25t3.359 1.391T15.25 7t-1.391 3.359T10.5 11.75t-3.359-1.391T5.75 7m11.72 15.03Q14 18.561 14 16.25q0-4 4-4t4 4q0 2.311-3.47 5.78q-.052.053-.113.094t-.13.069t-.141.043t-.146.014q-.074 0-.146-.014q-.073-.015-.141-.043t-.13-.069q-.061-.041-.113-.094m-4.72-5.78q0 2.196 2.313 5H4q-1.75 0-1.75-1.75q0-2.798 2.468-4.577q2.32-1.673 5.782-1.673q1.596 0 2.95.356q-.7 1.177-.7 2.644m7.75 0q0 1.534-2.5 4.175q-2.5-2.641-2.5-4.175q0-2.5 2.5-2.5t2.5 2.5m-1.98 1.636q-.415-1.368-1.576-2.427q-.194.298-.194.791q0 .802 1.25 2.305q.295-.354.52-.669");
}
</style><path class="n4l6_zbvh"/>`,
		"fallback": "uix-solid:agent-find",
	});
}

export default Component;
