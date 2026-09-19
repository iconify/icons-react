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

.rd0-uvbcw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35.5 17.812c-7.667-5.445-15.333 5.445-23 0v12.376c7.667 5.445 15.333-5.445 23 0z");
}
</style><path class="rd0-uvbcw"/><circle class="cpk0fnbgt"/>`,
		"fallback": "arcticons:dana",
	});
}

export default Component;
