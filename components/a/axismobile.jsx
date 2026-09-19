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
		"content": `<style>.cxfj52d6c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 39.835h11.39l12.616-22.143L24 8.165Zm29.695-12.479H24l7.11 12.479H42.5Z");
}
</style><path class="cxfj52d6c"/>`,
		"fallback": "arcticons:axismobile",
	});
}

export default Component;
