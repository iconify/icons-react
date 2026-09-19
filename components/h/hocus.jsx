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
		"content": `<style>.fzvvaqblx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m8.629 8.979l21.204 12.27l-15.493 8.954m0 6.71V33.92m4.048-26.725l4.247 4.121l4.518-2.695L22.906 4.5z");
}

.iza7x32-j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m18.279 7.964l-3.94-2.28L8.63 8.98v31.227l5.71 3.293");
}

.pzmp80dvd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m18.388 7.195l-.62 4.32l4.247 4.12l4.518-2.695l.62-4.319m-4.518 2.696l-.62 4.319");
}

.tx-rp3b_l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.164 24.524L14.34 18.84V43.5l27.028-15.623l.003-6.551l-14.812-8.57m14.812 8.57l-27.03 15.587");
}
</style><path class="iza7x32-j"/><path class="tx-rp3b_l"/><path class="fzvvaqblx"/><path class="pzmp80dvd"/>`,
		"fallback": "arcticons:hocus",
	});
}

export default Component;
