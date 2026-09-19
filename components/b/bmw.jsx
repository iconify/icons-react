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

.ivoeacboo {
  cx: 24px;
  cy: 24px;
  r: 12.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.mbty1dbao {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 11.5v25M11.5 24h25m-15-14.403V4.659l2.5 5l2.5-5v5m13.071 2.628l-4.419 2.651l2.651-4.419l-4.419 2.652l2.651-4.42m-23.938 3.164c.486-.486 1.282-.486 1.768 0s.486 1.281 0 1.767l-1.459 1.459l-3.535-3.536l1.458-1.458c.486-.486 1.282-.486 1.768 0s.486 1.282 0 1.768m0 0l-1.458 1.458");
}
</style><circle class="cpk0fnbgt"/><circle class="ivoeacboo"/><path class="mbty1dbao"/>`,
		"fallback": "arcticons:bmw",
	});
}

export default Component;
