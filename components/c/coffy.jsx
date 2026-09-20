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

.wu3md-qey {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.959 23.996h2.653m-2.653 2.357v-6.44h4.082m7.459.001l-2.653 4.082l-2.654-4.082m2.654 8.164v-4.082M13.01 25.31za2.744 2.744 0 0 1-2.754 2.755c-1.531 0-2.756-1.225-2.756-2.654v-2.755c0-1.531 1.225-2.756 2.755-2.654c1.531 0 2.654 1.225 2.654 2.654m9.815 1.34h2.654m-2.654 4.082v-8.164h4.082m-9.012 8.172za2.635 2.635 0 0 1-2.654-2.653v-2.756c0-1.53 1.225-2.755 2.654-2.755a2.744 2.744 0 0 1 2.755 2.755v2.654a2.744 2.744 0 0 1-2.755 2.755");
}
</style><circle class="cpk0fnbgt"/><path class="wu3md-qey"/>`,
		"fallback": "arcticons:coffy",
	});
}

export default Component;
