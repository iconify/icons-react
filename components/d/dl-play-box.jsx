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
		"content": `<style>.co3dljbto {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36.129 33.655c0 1.71-1.201 3.79-2.682 4.645s-2.682.162-2.682-1.548s1.2-3.79 2.682-4.645c1.48-.855 2.682-.162 2.682 1.548m5.108-8.847c0 1.71-1.201 3.79-2.682 4.645s-2.682.162-2.682-1.548s1.2-3.79 2.682-4.645c1.48-.855 2.682-.162 2.682 1.548");
}

.o0_h56dwo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.578 13.036a4 4 0 0 1 2 3.464V34a4 4 0 0 1-2 3.464l-15.156 8.75a4 4 0 0 1-4 0l-15.155-8.75a4 4 0 0 1-2-3.464V16.5a4 4 0 0 1 2-3.464l15.155-8.75a4 4 0 0 1 4 0z");
}
</style><path class="co3dljbto"/><path class="o0_h56dwo"/>`,
		"fallback": "arcticons:dl-play-box",
	});
}

export default Component;
