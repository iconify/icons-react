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
		"content": `<style>.mnd4z-bpq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M41.05 12.6c1.63-1.3 2.85-.23 2.85 1.14v20.52c0 1.73-1.22 2.44-2.85 1.14L26.79 24ZM14 8v32M4.9 17.16h21.89v13.68H4.9m0-13.68L14 8h18.5a3.2 3.2 0 0 1 2.85 2.85v26.26A3.2 3.2 0 0 1 32.5 40H7.75a2.81 2.81 0 0 1-2.85-2.89Z");
}
</style><path class="mnd4z-bpq"/>`,
		"fallback": "arcticons:google-meet-alt",
	});
}

export default Component;
