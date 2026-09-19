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
		"content": `<style>.fucaczbxx {
  cx: 24px;
  cy: 23.944px;
  r: 6.075px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.zcbrahbik {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m12.162 4.5l-1.605 6.03l2.877 32.97h21.132l2.877-32.97l-1.605-6.03Zm-5.864 6.583h35.404");
}
</style><path class="zcbrahbik"/><circle class="fucaczbxx"/>`,
		"fallback": "arcticons:huawei-lives",
	});
}

export default Component;
