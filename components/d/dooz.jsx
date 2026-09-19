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

.jlcs_2bht {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.29 12.12v23.76m9.42-23.76v23.76m7.17-16.59H12.12m23.76 9.42H12.12");
}
</style><path class="jlcs_2bht"/><circle class="cpk0fnbgt"/>`,
		"fallback": "arcticons:dooz",
	});
}

export default Component;
