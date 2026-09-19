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
		"content": `<style>.fvfcgbc-v {
  cx: 40.014px;
  cy: 24px;
  r: 2px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.j8sgmwbdr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.173 2.503A21.5 21.5 0 0 0 5.016 24a21.499 21.499 0 0 0 37.968 13.82l-6.511-5.465a13 13 0 0 1-9.959 4.644c-7.18 0-13-5.82-13-13s5.82-12.998 13-12.998a13 13 0 0 1 9.953 4.648l6.517-5.469a21.5 21.5 0 0 0-16.811-7.677");
}

.jmlhidbdl {
  cx: 23.515px;
  cy: 24px;
  r: 2px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.x7eufiwda {
  cx: 31.764px;
  cy: 24px;
  r: 2px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="j8sgmwbdr"/><circle class="jmlhidbdl"/><circle class="x7eufiwda"/><circle class="fvfcgbc-v"/>`,
		"fallback": "arcticons:chatterui",
	});
}

export default Component;
