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
		"content": `<style>.eqd_iydws {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.065 23.272v10.235l12.975 7.491l12.895-7.444V23.272m7.565-4.398v11.233");
}

.me983cfmy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M44.5 18.874L23.936 7.002L3.5 18.8l20.564 11.873z");
}
</style><path class="me983cfmy"/><path class="eqd_iydws"/>`,
		"fallback": "arcticons:foss-moodle",
	});
}

export default Component;
