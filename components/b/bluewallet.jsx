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
		"content": `<style>.ekjkq-a8p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 29.687c0-4.663 3.791-6.994 8.885-6.847l20.396-.147q6.995.44 7.719 7.141m-37-9.62c1.008-5.587 3.938-6.26 7.289-6.407h22.433c6.406.294 6.7 3.204 7.278 6.7");
}

.hzpqnlmob {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.5 5.5h29a4 4 0 0 1 4 4v29a4 4 0 0 1-4 4h-29a4 4 0 0 1-4-4v-29a4 4 0 0 1 4-4");
}
</style><path class="ekjkq-a8p"/><path class="hzpqnlmob"/>`,
		"fallback": "arcticons:bluewallet",
	});
}

export default Component;
