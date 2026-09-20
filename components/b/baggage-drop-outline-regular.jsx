import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.cjwmwb6_i {
  d: path("M3 12a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.jotk81b5q {
  d: path("M12 2v6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.rqm7ypbhc {
  d: path("M9.5 5.5 12 8l2.5 -2.5");
}
</style><g class="nrj6p8qat"><path class="cjwmwb6_i"/><path class="jotk81b5q"/><path class="rqm7ypbhc"/></g>`,
		"fallback": "iconmind:baggage-drop-outline-regular",
	});
}

export default Component;
