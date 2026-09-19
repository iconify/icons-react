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
		"content": `<style>.xq4hct7to {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 19.54L5.82 6.6a.84.84 0 0 0-1.32.69V24.7a4.57 4.57 0 0 0 1.7 3.57l15.16 12.34a4.16 4.16 0 0 0 5.28 0L41.8 28.27a4.57 4.57 0 0 0 1.7-3.57V7.29a.84.84 0 0 0-1.32-.69ZM8.78 30.37L24 19.54");
}
</style><path class="xq4hct7to"/>`,
		"fallback": "arcticons:aptoide",
	});
}

export default Component;
