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
		"content": `<style>.c_yummbzp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m23.999 22.298l10.747 18.614l5.816-.003l-13.654-23.651l-4.852 8.402M4.5 35.827l2.938 5.082l5.816-.003l2.938-5.081l-2.938-5.082");
}

.knf8uec4m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.192 35.824h15.616M26.907 7.089l-5.816.002L4.5 35.828l5.816-.003l2.938-5.082h15.62l-2.934-5.081h-9.748zL43.5 35.829l-2.938 5.08");
}
</style><path class="knf8uec4m"/><path class="c_yummbzp"/>`,
		"fallback": "arcticons:audeze-hq",
	});
}

export default Component;
