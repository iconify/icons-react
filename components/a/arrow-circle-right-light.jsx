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
		"content": `<style>.g8-ixhrso {
  fill: currentColor;
  d: path("M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m44.24-94.24a6 6 0 0 1 0 8.48l-32 32a6 6 0 0 1-8.48-8.48L153.51 134H88a6 6 0 0 1 0-12h65.51l-21.75-21.76a6 6 0 0 1 8.48-8.48Z");
}
</style><path class="g8-ixhrso"/>`,
		"fallback": "ph:arrow-circle-right-light",
	});
}

export default Component;
