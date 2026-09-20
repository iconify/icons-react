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
		"content": `<style>.uc0yiwbgv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 29.81za4.5 4.5 0 0 1 4.5 4.5v5.5h-9v-5.5a4.5 4.5 0 0 1 4.5-4.5");
}

.ukpv9lofz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.3 18.81h23.4v21H12.3zm23.4-8.62h7.8v29.63h-7.8zm-31.2 0h7.8v29.63H4.5zm0 0v-2m3.9 2v-2m0 8.62v-2m31.2 2v-2M19.5 26v-2m9 2v-2M12.3 10.19v-2m23.4 2v-2m3.9 2v-2m3.9 2v-2M20.1 18.81v-2m-3.9 2v-2m7.8 2v-2m3.9 2v-2m3.9 2v-2");
}
</style><path class="ukpv9lofz"/><path class="uc0yiwbgv"/>`,
		"fallback": "arcticons:fabularium",
	});
}

export default Component;
