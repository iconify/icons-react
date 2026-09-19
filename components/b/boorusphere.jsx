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
		"content": `<style>.gywjucctc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.038 42.5c.183-16.554 9.914-20.46 17.556-22.449c14.448-3.76 21.064 13.1 5.113 22.449z");
}

.yj2ht1bak {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.038 42.5V18.34c0-7.656 7.03-12.912 13.873-12.84c11.08.119 9.326 9.055 9.77 14.183");
}
</style><path class="gywjucctc"/><path class="yj2ht1bak"/>`,
		"fallback": "arcticons:boorusphere",
	});
}

export default Component;
