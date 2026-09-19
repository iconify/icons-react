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
		"content": `<style>.i16b5xbzm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.625 22.172A5.625 5.625 0 0 0 24 16.547h0a5.625 5.625 0 0 0-5.625 5.625v3.656A5.625 5.625 0 0 0 24 31.453h0a5.625 5.625 0 0 0 5.625-5.625m0 5.605V5.5");
}

.tgw1tmjll {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 24A18.5 18.5 0 1 1 24 5.5h18.5Z");
}
</style><path class="tgw1tmjll"/><path class="i16b5xbzm"/>`,
		"fallback": "arcticons:d-point",
	});
}

export default Component;
