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
		"content": `<style>.co_aj7bjd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m26.555 15.154l-.097 21.821m-4.61-.118l-.032-21.703l9.745-.214l.021 22.613m-13.606-.578l15.906 1.038m-2.418 2.299l5.755-4.77");
}

.tiiogib3e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M40.632 35.542q0 7.69-5.327 7.958l-24.357-1.722c-4.845-.556-4.343-2.77-1.273-3.776l5.103-1.958l.139-23.372c0-5.455 1.358-7.092 5.722-7.306L34.118 4.5q6.547 0 6.547 8.172zl-10.644-.172l-8.172-.192l-8.225 3.69m1.389-2.941l25.587-9.574");
}
</style><path class="co_aj7bjd"/><path class="tiiogib3e"/>`,
		"fallback": "arcticons:crex",
	});
}

export default Component;
