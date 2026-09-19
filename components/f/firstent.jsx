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
		"content": `<style>.hwzivmbwe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M44.788 18.514L28.1 21.78M2.763 27.35l13.613-2.96m-5.845-6.828L2.656 24.89M29.207 3.14L22.4 8.717M5.838 12.083L32.67 43.406m2.924-1.588c-3.96-13.238-10.32-26.103-15.687-38.925M45.5 24c0 11.874-9.626 21.5-21.5 21.5S2.5 35.874 2.5 24S12.126 2.5 24 2.5S45.5 12.126 45.5 24");
}
</style><path class="hwzivmbwe"/>`,
		"fallback": "arcticons:firstent",
	});
}

export default Component;
