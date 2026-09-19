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
		"content": `<style>.c4-65vb-e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.109 20.756a3.302 3.302 0 0 0-.342 6.365l17.257 5.038L42.5 27.167");
}

.d0o0abh2d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.109 27.32a3.302 3.302 0 0 0-.342 6.364l17.257 5.038L42.5 33.73M25.024 9.278L42.5 14.233l-17.476 4.992l-16.942-4.974zM42.5 14.233V33.73");
}

.rg3fvdb0g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.109 14.263a3.302 3.302 0 0 0-.342 6.365l17.257 5.038L42.5 20.674");
}
</style><path class="rg3fvdb0g"/><path class="c4-65vb-e"/><path class="d0o0abh2d"/>`,
		"fallback": "arcticons:emoji-books",
	});
}

export default Component;
