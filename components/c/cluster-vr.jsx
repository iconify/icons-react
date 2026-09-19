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
		"content": `<style>.s75-7866b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36.992 22.927a1.516 1.516 0 0 1-2.143 2.144l-1.072-1.072l1.072-1.072a1.516 1.516 0 0 1 2.143 0");
}

.ur---tbrc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22.63 21.427L25.201 24l-2.573 2.572l4.287 4.287l2.573-2.572l1.072 1.072a7.579 7.579 0 1 0 0-10.718l-1.072 1.072l-2.572-2.573z");
}

.vjl662egj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.202 32.574a12.126 12.126 0 1 1 0-17.148l-4.287 4.287a6.063 6.063 0 1 0 0 8.575z");
}
</style><path class="vjl662egj"/><path class="ur---tbrc"/><path class="s75-7866b"/>`,
		"fallback": "arcticons:cluster-vr",
	});
}

export default Component;
