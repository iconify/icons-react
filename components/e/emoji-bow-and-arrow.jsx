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
		"content": `<style>.a8pd-kb-a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35.97 41.887a1.98 1.98 0 0 1-.417-2.18c4.534-10.535-.331-22.75-10.866-27.283a20.77 20.77 0 0 0-16.42 0a1.978 1.978 0 0 1-1.563-3.633c12.542-5.397 27.085.394 32.482 12.935a24.72 24.72 0 0 1 0 19.543a1.98 1.98 0 0 1-3.216.618m2.002-36.352h4.521V9.82M9.88 11.809l26.29 26.285m6.323-32.559L12.347 35.677");
}
</style><path class="a8pd-kb-a"/>`,
		"fallback": "arcticons:emoji-bow-and-arrow",
	});
}

export default Component;
