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
		"content": `<style>.aj5p9tbck {
  cx: 34.5px;
  cy: 13.5px;
  r: 8px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.d1iyv0blr {
  cx: 13.5px;
  cy: 13.5px;
  r: 8px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.iduej5bfj {
  cx: 34.5px;
  cy: 34.5px;
  r: 8px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.sc2bi9bog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m32.5 10.589l2-1.089v8m-23.65-5.35a2.653 2.653 0 0 1 3.176-2.6c1.111.214 1.999 1.175 2.11 2.302c.082.837-.183 1.664-.762 2.172c-1.072.94-4.524 3.476-4.524 3.476h5.3");
}
</style><circle class="d1iyv0blr"/><circle class="aj5p9tbck"/><circle class="iduej5bfj"/><path class="sc2bi9bog"/>`,
		"fallback": "arcticons:0h-n0",
	});
}

export default Component;
