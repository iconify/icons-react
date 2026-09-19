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
		"content": `<style>.djwvpxblr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.032 12.495c-4.506-4.506-11.811-4.506-16.317 0s-4.506 11.811 0 16.317l11.422 11.422");
}

.f_gzbdbiw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.401 36.97L19.979 25.548a6.923 6.923 0 0 1 9.79-9.79a4.615 4.615 0 0 0 6.527-6.527c-6.308-6.308-16.536-6.308-22.844 0s-6.308 16.536 0 22.844l11.422 11.422");
}

.vlt4cfb3z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m31.401 36.97l6.527-6.527a4.615 4.615 0 0 0-6.527-6.527l-6.527 6.527m9.79-3.263l-6.527 6.527");
}
</style><path class="f_gzbdbiw"/><path class="djwvpxblr"/><path class="vlt4cfb3z"/>`,
		"fallback": "arcticons:carriage",
	});
}

export default Component;
