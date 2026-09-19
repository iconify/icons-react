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
		"content": `<style>.a_o4_673a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38 26.87a14.24 14.24 0 0 1-27.89 0");
}

.b6fjb4b2p {
  cx: 30.61px;
  cy: 18.39px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2.5px;
  ry: 4.22px;
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

.jxf98_oht {
  cx: 17.2px;
  cy: 18.44px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2.5px;
  ry: 4.22px;
}
</style><circle class="cpk0fnbgt"/><path class="a_o4_673a"/><ellipse class="jxf98_oht"/><ellipse class="b6fjb4b2p"/>`,
		"fallback": "arcticons:ifunny",
	});
}

export default Component;
