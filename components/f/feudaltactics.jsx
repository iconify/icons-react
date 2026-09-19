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
		"content": `<style>.fud9myyff {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 21.36l9.15 5.28M14.842 5.5l-9.15 5.287V21.36l9.15 5.278v10.574L24 42.5l9.15-5.287V26.64l9.159-5.278V10.787L33.15 5.5L24 10.787zm0 21.14L24 21.36m0 .001V10.787");
}
</style><path class="fud9myyff"/>`,
		"fallback": "arcticons:feudaltactics",
	});
}

export default Component;
