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
		"content": `<style>.m4n9oobld {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 28.94c-4.231 0-5.734 4.94-10.295 4.94S4.5 26.83 4.5 21.636c0-5.32 2.28-7.516 4.983-7.516c4.894 0 8.53 4.814 14.517 4.814s9.623-4.814 14.517-4.814c2.703 0 4.983 2.196 4.983 7.516c0 5.194-4.645 12.246-9.205 12.246S28.23 28.94 24 28.94");
}

.y3l0zyb8w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.552 21.086c2.829 0 6.925 2.872 8.065 3.336a7.77 7.77 0 0 1-5.367 2.492c-2.107 0-4.64-2.386-5.839-4.412a3.98 3.98 0 0 1 3.14-1.416");
}

.zjlt0vb3p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36.448 21.086c-2.829 0-6.925 2.872-8.065 3.336a7.77 7.77 0 0 0 5.367 2.492c2.107 0 4.64-2.386 5.839-4.412a3.98 3.98 0 0 0-3.14-1.416");
}
</style><path class="zjlt0vb3p"/><path class="m4n9oobld"/><path class="y3l0zyb8w"/>`,
		"fallback": "arcticons:bitmask",
	});
}

export default Component;
