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
		"content": `<style>.i3od64bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.962 20.913h9.216L24 35.02L9.822 20.913h9.216V6.497h9.924zM42.5 41.503h-37");
}
</style><path class="i3od64bjh"/>`,
		"fallback": "arcticons:docusign",
	});
}

export default Component;
