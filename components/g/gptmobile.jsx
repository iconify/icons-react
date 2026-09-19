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
		"content": `<style>.arg7a0b6l {
  cx: 20.469px;
  cy: 19.64px;
  r: 0.958px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ta1wfhbhf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.231 10.602L5.5 31.149h24.326l6.46 8.403L42.5 8.448z");
}

.vacr_tb1g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.408 15.015v10.803h14.405V14.874H16.408zm-2.93 3.495v4.095m19.984-4.236v4.13");
}

.xakmbwe0o {
  cx: 26.691px;
  cy: 19.765px;
  r: 0.958px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="ta1wfhbhf"/><path class="vacr_tb1g"/><circle class="arg7a0b6l"/><circle class="xakmbwe0o"/>`,
		"fallback": "arcticons:gptmobile",
	});
}

export default Component;
