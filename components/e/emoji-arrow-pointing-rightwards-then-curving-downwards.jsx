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
		"content": `<style>.chly6cb2g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.587 42.5V20.431c0-8.246-6.685-14.931-14.932-14.931h-4.2");
}

.fiqf34ggw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m18.629 32.542l9.958 9.958l9.958-9.958");
}
</style><path class="fiqf34ggw"/><path class="chly6cb2g"/>`,
		"fallback": "arcticons:emoji-arrow-pointing-rightwards-then-curving-downwards",
	});
}

export default Component;
