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

.f19293bdg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.904 28.596a6.5 6.5 0 0 1 0-9.192m2.121 7.071a3.5 3.5 0 0 1 0-4.95m28.071 7.071a6.5 6.5 0 0 0 0-9.192m-2.121 7.071a3.5 3.5 0 0 0 0-4.95");
}

.km4l25bno {
  width: 17px;
  height: 29px;
  x: 15.5px;
  y: 9.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 3px;
  ry: 3px;
}

.uczrkca8e {
  cx: 24px;
  cy: 12.5px;
  r: 0.75px;
  fill: currentColor;
}
</style><circle class="cpk0fnbgt"/><path class="f19293bdg"/><rect class="km4l25bno"/><circle class="uczrkca8e"/>`,
		"fallback": "arcticons:free-mobile-config",
	});
}

export default Component;
