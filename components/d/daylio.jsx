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
		"content": `<style>.ahmjtvmws {
  cx: 35.89px;
  cy: 22.98px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 1.75px;
  ry: 2.39px;
}

.byyvn4y9n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m13.11 32.44l21.78.2c-1.07 10.49-22.12 8.64-21.78-.2");
}

.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.relochoce {
  cx: 12.11px;
  cy: 22.98px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 1.75px;
  ry: 2.39px;
}
</style><path class="byyvn4y9n"/><ellipse class="relochoce"/><ellipse class="ahmjtvmws"/><circle class="cpk0fnbgt"/>`,
		"fallback": "arcticons:daylio",
	});
}

export default Component;
