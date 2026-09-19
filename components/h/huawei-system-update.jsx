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
		"content": `<style>.bsx0s_bjj {
  width: 25.525px;
  height: 39px;
  x: 11.237px;
  y: 4.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2px;
}

.rni-g5kma {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.858 30.12V14.748l5.456 5.884m-5.456-5.884l-5.456 5.884m-7.165 17.555h25.526");
}
</style><rect class="bsx0s_bjj"/><path class="rni-g5kma"/>`,
		"fallback": "arcticons:huawei-system-update",
	});
}

export default Component;
