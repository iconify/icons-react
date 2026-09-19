import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ge9iq369h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.79 31.208a3.79 3.79 0 1 1-7.58 0v-6.422a3.79 3.79 0 1 1 7.58 0z");
}

.takrpivpg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.624 31.618a7.624 7.624 0 1 1-15.248 0M24 39.242v4.179m-3.694 0h7.388M26.32 21.8c3.74-1.02 6.49-4.43 6.49-8.49c0-4.87-3.95-8.81-8.81-8.81s-8.81 3.94-8.81 8.81c0 4.06 2.75 7.47 6.49 8.49");
}

.w2em2mp_w {
  width: 6.243px;
  height: 6.243px;
  x: 20.878px;
  y: 10.186px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 0.925px;
  ry: 0.925px;
}
</style><path class="ge9iq369h"/><path class="takrpivpg"/><rect transform="rotate(45 24 13.307)" class="w2em2mp_w"/>`,
		"fallback": "arcticons:futo-voice-input",
	});
}

export default Component;
