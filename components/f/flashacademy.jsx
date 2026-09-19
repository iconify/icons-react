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
		"content": `<style>.fo3qmbbut {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17 4.5h14a5.5 5.5 0 0 1 5.5 5.5h0a5.5 5.5 0 0 1-5.5 5.5H17a5.5 5.5 0 0 1-5.5-5.5h0A5.5 5.5 0 0 1 17 4.5");
}

.wd9i8zbsg {
  cx: 31px;
  cy: 24px;
  r: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ytjad3_tv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17 18.5a5.5 5.5 0 0 1 5.5 5.5v14a5.5 5.5 0 0 1-5.5 5.5h0a5.5 5.5 0 0 1-5.5-5.5V24a5.5 5.5 0 0 1 5.5-5.5");
}
</style><path class="fo3qmbbut"/><circle class="wd9i8zbsg"/><path class="ytjad3_tv"/>`,
		"fallback": "arcticons:flashacademy",
	});
}

export default Component;
