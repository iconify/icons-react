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
		"content": `<style>.idj2lppny {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.816 19.895L24 24.514l7.184-4.619v7.185L24 31.698l-7.184-4.618z");
}

.jj1nd9bus {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.816 31.697L24 36.316l7.184-4.619v7.185L24 43.5l-7.184-4.618z");
}

.q1iwh3a2p {
  cx: 24px;
  cy: 11.684px;
  r: 7.184px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="q1iwh3a2p"/><path class="idj2lppny"/><path class="jj1nd9bus"/>`,
		"fallback": "arcticons:indus-appstore",
	});
}

export default Component;
