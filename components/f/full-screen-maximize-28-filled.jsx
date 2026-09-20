import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.b36heqsfx {
  fill: currentColor;
  d: path("M3 6a3 3 0 0 1 3-3h3.5a1 1 0 1 1 0 2H6a1 1 0 0 0-1 1v3.5a1 1 0 1 1-2 0zm14.5-2a1 1 0 0 1 1-1H22a3 3 0 0 1 3 3v3.5a1 1 0 1 1-2 0V6a1 1 0 0 0-1-1h-3.5a1 1 0 0 1-1-1M4 17.5a1 1 0 0 1 1 1V22a1 1 0 0 0 1 1h3.5a1 1 0 1 1 0 2H6a3 3 0 0 1-3-3v-3.5a1 1 0 0 1 1-1m20 0a1 1 0 0 1 1 1V22a3 3 0 0 1-3 3h-3.5a1 1 0 1 1 0-2H22a1 1 0 0 0 1-1v-3.5a1 1 0 0 1 1-1");
}
</style><path class="b36heqsfx"/>`,
		"fallback": "fluent:full-screen-maximize-28-filled",
	});
}

export default Component;
