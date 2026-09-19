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
		"content": `<style>.cohh1bbau {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.123 42.5L24 28.965L37.877 42.5");
}

.dp1vl9bff {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.123 31.108L24 17.573l13.877 13.535");
}

.jfzhts04a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.123 19.035L24 5.5l13.877 13.535");
}
</style><path class="jfzhts04a"/><path class="dp1vl9bff"/><path class="cohh1bbau"/>`,
		"fallback": "arcticons:daiso",
	});
}

export default Component;
