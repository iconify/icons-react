import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.vj7ley8kf {
  fill: currentColor;
  d: path("M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24M40 128a88 88 0 0 1 150.2-62.2L65.8 190.2A87.76 87.76 0 0 1 40 128");
}
</style><path class="vj7ley8kf"/>`,
		"fallback": "ph:circle-half-tilt-fill",
	});
}

export default Component;
