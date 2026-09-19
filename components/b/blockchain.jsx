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
		"content": `<style>.j62tedeug {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.169 41.33L6.67 26.831a4.016 4.016 0 0 1 0-5.662L21.169 6.67a4.016 4.016 0 0 1 5.662 0L41.33 21.169a4.016 4.016 0 0 1 0 5.662L26.831 41.33a4.004 4.004 0 0 1-5.662 0M24 42.502V24m-13.86-6.301L24 24m13.86-6.301L24 24");
}
</style><path class="j62tedeug"/>`,
		"fallback": "arcticons:blockchain",
	});
}

export default Component;
