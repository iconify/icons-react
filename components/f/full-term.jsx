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
		"content": `<style>.srqwc63fu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.5 33.754c-5.361 4.24-12.13 6.77-19.5 6.77s-14.139-2.53-19.5-6.77L17.175 7.477c2.064 1 4.377 1.56 6.825 1.56s4.76-.56 6.825-1.56z");
}
</style><path class="srqwc63fu"/>`,
		"fallback": "arcticons:full-term",
	});
}

export default Component;
