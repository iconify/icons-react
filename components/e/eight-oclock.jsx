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
		"content": `<style>.rt_37l3dj {
  cx: 32px;
  cy: 32px;
  r: 3px;
  fill: currentColor;
}

.uvsvf128b {
  fill: currentColor;
  d: path("M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m4 30c0 1.477-.81 2.752-2 3.445V38h-4v-2.467L17.93 43L16 39.416l12.001-7.425A3.98 3.98 0 0 1 30 28.555V6h4v22.28L36.068 27L38 30.584l-2.017 1.248c.002.057.017.11.017.168");
}
</style><path class="uvsvf128b"/><circle class="rt_37l3dj"/>`,
		"fallback": "emojione-monotone:eight-oclock",
	});
}

export default Component;
