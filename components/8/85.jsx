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
		"content": `<style>.i9clfwm2k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4");
}

.zrliizose {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.956 24a3.456 3.456 0 0 0-3.456 3.456h0a3.456 3.456 0 0 0 3.456 3.456h2.247a3.456 3.456 0 0 0 3.456-3.456h0A3.456 3.456 0 0 0 19.203 24m0 0a3.456 3.456 0 0 0 3.456-3.456h0a3.456 3.456 0 0 0-3.456-3.456h-2.247a3.456 3.456 0 0 0-3.456 3.456h0A3.456 3.456 0 0 0 16.956 24m0 0h2.247m6.829 5.746c.955.8 1.88 1.166 4.195 1.166h.397a3.876 3.876 0 0 0 3.876-3.875h0a3.876 3.876 0 0 0-3.876-3.876h-4.592v-6.073H34.5");
}
</style><path class="zrliizose"/><path class="i9clfwm2k"/>`,
		"fallback": "arcticons:85",
	});
}

export default Component;
