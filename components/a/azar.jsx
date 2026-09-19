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
		"content": `<style>.gsbd-sbmq {
  cx: 23.992px;
  cy: 24.407px;
  r: 17.642px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.h-y5i9mnt {
  cx: 23.044px;
  cy: 16.479px;
  r: 1.829px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.tcbrqozgv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34.848 18.265c-1.83 3.659-4.748 4.878-10.628 4.138");
}

.y03pagbva {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.4 14.223c6.118.382 9.255 6.96 2.59 11.49s-11.064 6.36-19.08 7.71M6.142 31.986c-3.877-2.265-2.579-6.367.257-8.89");
}

.yfosteb_q {
  cx: 32.104px;
  cy: 14.039px;
  r: 1.481px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="gsbd-sbmq"/><path class="y03pagbva"/><path class="tcbrqozgv"/><circle class="h-y5i9mnt"/><circle class="yfosteb_q"/>`,
		"fallback": "arcticons:azar",
	});
}

export default Component;
