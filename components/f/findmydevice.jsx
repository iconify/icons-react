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
		"content": `<style>.s7t1ugb9p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.42 25.562c2.393 2.246 6.549 5.842 6.549 5.842s4.528-3.987 6.548-5.686c4.813-4.047 1.996-14.895-6.548-14.963c-7.703-.061-11.579 10.086-6.549 14.807");
}

.skoo02blj {
  cx: 24.011px;
  cy: 19.619px;
  r: 3.409px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.sv1fygbtq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.28 35.552c-22.12 1.986-9.569 6.74 3.436 6.743c13.123.002 26.768-4.38 3.475-6.743");
}

.t3j01575b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.573 29.151c3.79 3.557 10.37 9.252 10.37 9.252s7.17-6.314 10.368-9.003c7.621-6.409 3.16-23.585-10.369-23.694C11.746 5.608 5.61 21.676 13.573 29.15Z");
}
</style><path class="t3j01575b"/><path class="s7t1ugb9p"/><circle class="skoo02blj"/><path class="sv1fygbtq"/>`,
		"fallback": "arcticons:findmydevice",
	});
}

export default Component;
