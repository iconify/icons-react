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
		"content": `<style>.lons6w6yk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M41.76 19.537H6.24a.74.74 0 0 1-.74-.741V16.72a.74.74 0 0 1 .74-.74h35.52a.74.74 0 0 1 .74.74v2.076a.74.74 0 0 1-.74.741M12.899 31.99h-1.441a2.25 2.25 0 0 1-2.24-2.243v-1.443a2.25 2.25 0 0 1 2.24-2.244h1.44c1.232 0 2.24 1.01 2.24 2.243v1.444a2.25 2.25 0 0 1-2.24 2.243");
}

.ppx-q6bdp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M41.73 35.692H6.27a.74.74 0 0 1-.74-.741V13.049a.74.74 0 0 1 .74-.741h35.46a.74.74 0 0 1 .74.741v21.902a.74.74 0 0 1-.74.741");
}
</style><path class="ppx-q6bdp"/><path class="lons6w6yk"/>`,
		"fallback": "arcticons:emoji-credit-card",
	});
}

export default Component;
