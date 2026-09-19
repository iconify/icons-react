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
		"content": `<style>.jg1qq6hpa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.732 13.695h3.971v18h-3.971z");
}

.l25yi7a5e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 41.819c12.863-5.675 18.5-12.182 18.5-24.137V8.716h-6.734c-3.083 0-7.396.019-11.766-2.535c-4.37 2.554-8.682 2.535-11.766 2.535H5.5v8.966c0 11.955 5.637 18.462 18.5 24.137m-6.254-28.124h12.508m0 3.011v-3.011m-1.191 10.57v-4m-5.361 2h5.361m-11.317 9.43h8.272");
}
</style><path class="l25yi7a5e"/><path class="jg1qq6hpa"/>`,
		"fallback": "arcticons:forge-of-empires",
	});
}

export default Component;
