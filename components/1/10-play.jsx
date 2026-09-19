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
		"content": `<style>.clqa87b8j {
  cx: 30.5px;
  cy: 24px;
  r: 13px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.op467xpoa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.668 11A4.167 4.167 0 0 1 4.5 15.168V24c7.18 0 13-5.82 13-13m18.555 12.04l-7.851-4.534a1.11 1.11 0 0 0-1.664.96v9.067a1.11 1.11 0 0 0 1.664.96l7.851-4.532a1.11 1.11 0 0 0 0-1.922Z");
}

.wvt5edcpl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.668 23.315V37H17.5V11H8.668");
}
</style><circle class="clqa87b8j"/><path class="wvt5edcpl"/><path class="op467xpoa"/>`,
		"fallback": "arcticons:10-play",
	});
}

export default Component;
