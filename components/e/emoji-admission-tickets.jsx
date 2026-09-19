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
		"content": `<style>.byjlb63dh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.855 18.048h20.29v11.904h-20.29z");
}

.w87mdfbiz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36.89 24c0-2.917 2.328-5.416 5.61-6.31v-3.095h-37v3.274c2.924 1.012 5.013 3.393 5.013 6.13S8.424 29.12 5.5 30.132v3.273h37V30.31c-3.223-.893-5.61-3.393-5.61-6.31");
}
</style><path class="w87mdfbiz"/><path class="byjlb63dh"/>`,
		"fallback": "arcticons:emoji-admission-tickets",
	});
}

export default Component;
