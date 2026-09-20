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
		"content": `<style>.ctwx8b6-f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.469 29.233s1.29 7.32 8.918 7.32");
}

.jfi3gfzay {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.518 22.516s1.469-5.981 14.48-18.016m14.48 18.003s-1.467-5.97-14.452-17.98M9.66 22.09c.313-.801.691-1.575 1.13-2.313m26.516.16c.405.7.756 1.433 1.05 2.189m0 0a15.8 15.8 0 0 1 1.071 5.728c0 8.64-6.905 15.644-15.424 15.645H24c-8.52 0-15.426-7.004-15.426-15.644v-.003c0-1.973.368-3.928 1.085-5.763");
}
</style><path class="jfi3gfzay"/><path class="ctwx8b6-f"/>`,
		"fallback": "arcticons:hydrotracker",
	});
}

export default Component;
