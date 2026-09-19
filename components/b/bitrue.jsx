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
		"content": `<style>.awad51qaz {
  cx: 24px;
  cy: 27.239px;
  r: 6.95px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.g-4ytyt1u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.05 14.916v12.323");
}

.wyvzq4ewy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m29 40.613l11.887-6.863v-19.5M7.113 20.024V33.75L24 43.5m11.887-32.137L24 4.5L7.113 14.25");
}
</style><path class="wyvzq4ewy"/><circle class="awad51qaz"/><path class="g-4ytyt1u"/>`,
		"fallback": "arcticons:bitrue",
	});
}

export default Component;
