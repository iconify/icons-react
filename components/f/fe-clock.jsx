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
		"content": `<style>.cuw9pbbsc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m22.232 22.232l-7.113-7.113m10.649 7.118l10.227-10.251M25.44 41.064h5.92m-5.92-11.84h5.92m-5.92 5.92h3.86m-3.86-5.92v11.84m-8.8-11.84h5.92m-5.92 5.92h3.848m-3.848-5.92v11.84");
}

.wzg4aubzr {
  cx: 24px;
  cy: 24px;
  r: 2.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.x1cd2-baa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 2.5A21.5 21.5 0 1 1 2.5 24A21.5 21.5 0 0 1 24 2.5");
}
</style><path class="x1cd2-baa"/><circle class="wzg4aubzr"/><path class="cuw9pbbsc"/>`,
		"fallback": "arcticons:fe-clock",
	});
}

export default Component;
