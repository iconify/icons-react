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
		"content": `<style>.fg5m_sbwl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m5.5 37.361l12.333-12.333H29.14L16.806 37.36zm23.64-12.333l6.166 12.333H24l-2.35-4.701m-2.789-9.688L12.695 10.64H24l6.167 12.333");
}

.luym16ghs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m26.398 15.436l4.796-4.797H42.5L30.167 22.972H18.86");
}
</style><path class="fg5m_sbwl"/><path class="luym16ghs"/>`,
		"fallback": "arcticons:caixa",
	});
}

export default Component;
