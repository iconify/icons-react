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
		"content": `<style>.fjc2uibvx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22.973 13.425a12.6 12.6 0 0 0-6.084-1.556c-6.842 0-12.389 5.413-12.389 12.089s5.547 12.088 12.39 12.088c6.073 0 11.126-4.264 12.187-9.89h-6.229m6.393-5.892a9.14 9.14 0 0 1 5.255-1.646c4.973 0 9.004 3.921 9.004 8.757s-4.032 8.756-9.005 8.756a9.2 9.2 0 0 1-3.741-.79");
}
</style><path class="fjc2uibvx"/>`,
		"fallback": "arcticons:go-north-east",
	});
}

export default Component;
