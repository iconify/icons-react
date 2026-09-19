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
		"content": `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.e5enbjbxz {
  cx: 33.018px;
  cy: 21.371px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2.598px;
  ry: 3.411px;
}

.ht461fbdq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.119 32.086s1.348 2.432 2.782 2.03s1.94-1.93 2.03-3.4");
}

.kb--gpbni {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.031 32.118s.741-8.448 6.635-2.227c0 0-.86 2.206-6.635 2.227");
}

.lkzar4bcx {
  cx: 40.02px;
  cy: 28.243px;
  r: 4.127px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.n5olb5xnc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.87 33.811s-2.016-9.72 4.41-13.434s7.524 2.561 14.53.218c5.831-1.95 4.013-6.186 10.282-7.301C41.914 11.9 45.3 21.071 45.3 21.071");
}

.pvf5obbqf {
  cx: 16.02px;
  cy: 25.926px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2.598px;
  ry: 3.411px;
}

.tifkukfxy {
  cx: 12.997px;
  cy: 35.534px;
  r: 4.127px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="cpk0fnbgt"/><ellipse transform="rotate(-15 16.02 25.926)" class="pvf5obbqf"/><ellipse transform="rotate(-15 33.018 21.371)" class="e5enbjbxz"/><path class="n5olb5xnc"/><circle class="tifkukfxy"/><circle class="lkzar4bcx"/><path class="kb--gpbni"/><path class="ht461fbdq"/>`,
		"fallback": "arcticons:finch",
	});
}

export default Component;
