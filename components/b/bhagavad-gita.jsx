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
		"content": `<style>.b6yjgkcjy {
  cx: 24px;
  cy: 24px;
  r: 17.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.bceiu4bqs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m16.55 20.298l9.037 9.037m-13.536-.971l6.283-6.282m-2.47 10.264l6.367-6.367");
}

.cfovm7i5g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.664 35.262V16.039a3.3 3.3 0 0 1 6.601 0v19.223m-8.27-18.168h9.954");
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

.rimu4cckv {
  cx: 18.902px;
  cy: 17.947px;
  r: 3.325px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="cpk0fnbgt"/><circle class="b6yjgkcjy"/><path class="cfovm7i5g"/><circle class="rimu4cckv"/><path class="bceiu4bqs"/>`,
		"fallback": "arcticons:bhagavad-gita",
	});
}

export default Component;
