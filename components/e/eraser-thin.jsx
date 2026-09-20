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
		"content": `<style>.m4d012yhs {
  fill: currentColor;
  d: path("m222.15 83.22l-41.38-41.37a20 20 0 0 0-28.28 0L33.85 160.48a20 20 0 0 0 0 28.29l30.06 30.06a4 4 0 0 0 2.83 1.17H216a4 4 0 0 0 0-8h-94.34l100.49-100.49a20 20 0 0 0 0-28.29M110.34 212H68.4l-28.89-28.89a12 12 0 0 1 0-17L96 109.65L154.35 168Zm106.15-106.15L160 162.34L101.65 104l56.49-56.48a12 12 0 0 1 17 0l41.37 41.37a12 12 0 0 1-.02 16.96");
}
</style><path class="m4d012yhs"/>`,
		"fallback": "ph:eraser-thin",
	});
}

export default Component;
