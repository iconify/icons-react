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
		"content": `<style>.j3s9ivbxi {
  width: 37px;
  height: 37px;
  x: 5.5px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}

.qpa3zbbne {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.384 28.283v-8.566h1.928a3.75 3.75 0 0 1 3.747 3.748v1.07a3.75 3.75 0 0 1-3.747 3.748zm8.566 0v-8.566h2.804c1.586 0 2.871 1.288 2.871 2.877s-1.285 2.877-2.87 2.877H17.95m2.805 0l2.804 2.81M26.516 24h2.793m1.49 4.283h-4.283v-8.566h4.283");
}

.yjyvtxb_t {
  width: 5.675px;
  height: 8.566px;
  x: 32.941px;
  y: 19.717px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2.837px;
  ry: 2.837px;
}
</style><rect class="j3s9ivbxi"/><path class="qpa3zbbne"/><rect class="yjyvtxb_t"/>`,
		"fallback": "arcticons:dreo",
	});
}

export default Component;
