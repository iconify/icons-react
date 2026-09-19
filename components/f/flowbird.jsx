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

.kg29immwa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.659 12.235H24.23c-1.927 0-3.89 2.27-3.89 4.197v19.334m.002-14.924h6.97");
}

.ufextzb0p {
  cx: 25.888px;
  cy: 34.557px;
  r: 1.208px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="cpk0fnbgt"/><path class="kg29immwa"/><circle class="ufextzb0p"/>`,
		"fallback": "arcticons:flowbird",
	});
}

export default Component;
