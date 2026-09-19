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
		"content": `<style>.mnwi_p2um {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.856 32.37a7.68 7.68 0 0 1-6.97-8.074a7.61 7.61 0 0 1 7.333-7.695a7.61 7.61 0 0 1 7.334 7.694");
}

.r1tryf-4c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 23.689v18.756H31.537V24.026m-9.299 18.759l8.31-10.416h-6.7");
}

.w4nvobbtg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22.144 42.83A18.764 18.764 0 0 1 5.532 22.94a18.656 18.656 0 0 1 18.78-17.767a18.687 18.687 0 0 1 18.18 18.407");
}
</style><path class="w4nvobbtg"/><path class="mnwi_p2um"/><path class="r1tryf-4c"/>`,
		"fallback": "arcticons:ally",
	});
}

export default Component;
