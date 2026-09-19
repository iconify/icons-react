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
		"content": `<style>.nvt70objd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8 29.674c4.391 4.208 10.11 6.524 16.032 6.491C29.954 36.133 35.65 33.755 40 29.5");
}

.qboi4lm1i {
  cx: 13.395px;
  cy: 16.555px;
  r: 4.72px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.wim2cdc2i {
  cx: 34.605px;
  cy: 16.555px;
  r: 4.72px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="nvt70objd"/><circle class="qboi4lm1i"/><circle class="wim2cdc2i"/>`,
		"fallback": "arcticons:brain-dots",
	});
}

export default Component;
