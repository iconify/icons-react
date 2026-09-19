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

.mem18ybbx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.28 29.7c1.113-.45 3.092-1.048 3.688-.326c.644.781-.17 2.477-.92 3.794");
}

.ss-bq-p5d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.798 30.223c1.759 1.397 6.954 3.535 12.488 3.535a17 17 0 0 0 10.167-3.08m-17.249-8.756a2.98 2.98 0 0 0 2.177.592h.594a1.75 1.75 0 0 0 1.75-1.753h0a1.75 1.75 0 0 0-1.75-1.754h-1.188a1.75 1.75 0 0 1-1.75-1.753h0a1.75 1.75 0 0 1 1.75-1.754h.594a2.98 2.98 0 0 1 2.177.592m4.111 3.775a2.647 2.647 0 0 0 2.647 2.647h0a2.647 2.647 0 0 0 2.647-2.647v-1.72a2.647 2.647 0 0 0-2.647-2.647h0a2.647 2.647 0 0 0-2.647 2.647m0-2.647v10.587");
}
</style><circle class="cpk0fnbgt"/><path class="mem18ybbx"/><path class="ss-bq-p5d"/>`,
		"fallback": "arcticons:amazon-shopper-panel",
	});
}

export default Component;
