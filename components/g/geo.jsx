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
		"content": `<style>.kgs5dvbde {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m26.75 20.25l-.3 2.3l-2.3.3l-.3 2.3l-2.3.3l-.3 2.3");
}

.wbf7rtnyz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m30.5 24l6.5 6.5l6.5-6.5l-6.5-6.5l-13 13l-6.5-6.5l6.5-6.5m-13 0L4.5 24l6.5 6.5l6.5-6.5l-3.25-3.25l-3.9 3.9");
}
</style><path class="wbf7rtnyz"/><path class="kgs5dvbde"/>`,
		"fallback": "arcticons:geo",
	});
}

export default Component;
