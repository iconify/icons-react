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
		"content": `<style>.adytyvb4w {
  cx: 24px;
  cy: 31.5px;
  r: 2px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.h6d5p1bpj {
  cx: 24px;
  cy: 16.5px;
  r: 12px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.mx8_au4hu {
  cx: 24px;
  cy: 16.5px;
  r: 2px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.rwjrpobuw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12 4.5h9v39h-9z");
}

.s2c393ypg {
  cx: 24px;
  cy: 31.5px;
  r: 12px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="rwjrpobuw"/><circle class="h6d5p1bpj"/><circle class="s2c393ypg"/><circle class="mx8_au4hu"/><circle class="adytyvb4w"/>`,
		"fallback": "arcticons:burrito",
	});
}

export default Component;
