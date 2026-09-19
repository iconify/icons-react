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
		"content": `<style>.fq7thm4jg {
  cx: 41.508px;
  cy: 28.885px;
  r: 3.991px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.htut53bre {
  cx: 24px;
  cy: 6.93px;
  r: 3.991px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.lm77jubwp {
  cx: 9.959px;
  cy: 13.692px;
  r: 3.991px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.skk2bfb4p {
  cx: 31.792px;
  cy: 41.069px;
  r: 3.991px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.u_0wi-jty {
  cx: 16.208px;
  cy: 41.069px;
  r: 3.991px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.widxglbpz {
  cx: 38.041px;
  cy: 13.692px;
  r: 3.991px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.xyrdo-b9p {
  cx: 6.492px;
  cy: 28.885px;
  r: 3.991px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="widxglbpz"/><circle class="fq7thm4jg"/><circle class="skk2bfb4p"/><circle class="u_0wi-jty"/><circle class="xyrdo-b9p"/><circle class="lm77jubwp"/><circle class="htut53bre"/>`,
		"fallback": "arcticons:a7m-workout",
	});
}

export default Component;
