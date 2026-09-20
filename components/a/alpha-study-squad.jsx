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
		"content": `<style>.e2_mg9_qx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.095 28.567c.74.62 1.54.906 3.335.906h.91a2.683 2.683 0 0 0 2.68-2.686a2.683 2.683 0 0 0-2.68-2.687h-1.82a2.683 2.683 0 0 1-2.68-2.686a2.683 2.683 0 0 1 2.68-2.687h.91c1.795 0 2.595.285 3.335.907m2.201 8.933c.74.62 1.54.906 3.335.906h.91a2.683 2.683 0 0 0 2.68-2.686a2.683 2.683 0 0 0-2.68-2.687h-1.82a2.683 2.683 0 0 1-2.68-2.686a2.683 2.683 0 0 1 2.68-2.687h.91c1.796 0 2.595.285 3.335.907");
}

.q1zo_ib_x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.5 9.334a5.5 5.5 0 0 0-3.922 0C27.35 14.668 30.41 38.93 17.071 38.664C10.633 38.537 4.504 33.1 4.5 24S10.633 9.463 17.07 9.334c13.34-.264 10.278 23.999 22.508 29.332a5.5 5.5 0 0 0 3.922 0");
}
</style><path class="q1zo_ib_x"/><path class="e2_mg9_qx"/>`,
		"fallback": "arcticons:alpha-study-squad",
	});
}

export default Component;
