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
		"content": `<style>.dk3d-eb-k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 19.468l3.355 18.642h5.4L27.79 9.89h-7.58l-4.965 28.22h5.4Z");
}

.ghwruydxk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m31.423 30.542l6.811-6.826l-7.797-7.816h5.065l7.998 8.06l-8.011 8.14h-3.792");
}

.jbfhd-b5f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.303 32.1H12.51L4.5 23.96l7.998-8.06h5.065l-7.797 7.816l6.81 6.826");
}
</style><path class="jbfhd-b5f"/><path class="dk3d-eb-k"/><path class="ghwruydxk"/>`,
		"fallback": "arcticons:acode",
	});
}

export default Component;
