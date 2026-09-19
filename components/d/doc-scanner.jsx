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
		"content": `<style>.dmca72itk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4M5.5 31h37");
}

.tkj0yzb0k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.5 22.873v-9.246h2.08a4.045 4.045 0 0 1 4.046 4.045v1.156a4.045 4.045 0 0 1-4.046 4.045zm23-3.101v.038a3.063 3.063 0 0 1-3.063 3.063h0a3.063 3.063 0 0 1-3.063-3.063v-3.12a3.063 3.063 0 0 1 3.063-3.063h0A3.063 3.063 0 0 1 35.5 16.69v.038M20.937 19.81a3.063 3.063 0 0 0 6.126 0v-3.12a3.063 3.063 0 0 0-6.126 0z");
}
</style><path class="dmca72itk"/><path class="tkj0yzb0k"/>`,
		"fallback": "arcticons:doc-scanner",
	});
}

export default Component;
