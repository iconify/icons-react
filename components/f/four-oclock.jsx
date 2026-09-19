import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.qk_wzobet {
  fill: currentColor;
  d: path("M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m14.067 41L34 35.535V38h-4v-2.555c-1.19-.693-2-1.969-2-3.445c0-.057.015-.11.017-.166L26 30.586L27.93 27L30 28.281V6h4v22.555a3.98 3.98 0 0 1 1.999 3.438L48 39.416z");
}

.rt_37l3dj {
  cx: 32px;
  cy: 32px;
  r: 3px;
  fill: currentColor;
}
</style><path class="qk_wzobet"/><circle class="rt_37l3dj"/>`,
		"fallback": "emojione-monotone:four-oclock",
	});
}

export default Component;
