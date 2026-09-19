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
		"content": `<style>.eu4j98bcs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.75 43.5h16.5m-8.25 0L13.79 25.8h20.43zm8.25-39h-16.5m8.25 0l10.22 17.69H13.79z");
}
</style><path class="eu4j98bcs"/>`,
		"fallback": "arcticons:diode",
	});
}

export default Component;
