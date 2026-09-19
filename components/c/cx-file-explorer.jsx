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
		"content": `<style>.h0qgeuwow {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 11.5a3 3 0 0 1 3-3h8.718a4 4 0 0 1 2.325.745l4.914 3.51a4 4 0 0 0 2.325.745H40.5a3 3 0 0 1 3 3v20a3 3 0 0 1-3 3h-33a3 3 0 0 1-3-3z");
}

.moxp152jz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.366 19.984L34 33.016m0-13.032l-8.634 13.032m-2.732-4.37v.053a4.317 4.317 0 0 1-4.317 4.317h0A4.317 4.317 0 0 1 14 28.7v-4.398a4.317 4.317 0 0 1 4.317-4.317h0a4.317 4.317 0 0 1 4.317 4.317v.053");
}
</style><path class="h0qgeuwow"/><path class="moxp152jz"/>`,
		"fallback": "arcticons:cx-file-explorer",
	});
}

export default Component;
