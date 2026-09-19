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

.dxa2iruou {
  cx: 24px;
  cy: 24px;
  r: 7.933px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.gh5f3bcxx {
  fill: none;
  stroke: currentColor;
  d: path("M24 2.5v13.539m0 15.744V45.5M11.35 6.615l7.947 10.921m9.296 12.775l8.057 11.073M6.687 11.252L17.63 19.31m12.708 9.358l10.975 8.08");
}

.kr2jg8buc {
  cx: 24px;
  cy: 24px;
  r: 4.995px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="cpk0fnbgt"/><circle class="kr2jg8buc"/><path class="gh5f3bcxx"/><circle class="dxa2iruou"/>`,
		"fallback": "arcticons:dvd",
	});
}

export default Component;
