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
		"content": `<style>.jwyztr91h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 17.58L10.32 41.87a.42.42 0 0 0 .52.6L24 37.37m0-19.79l13.68 24.29a.42.42 0 0 1-.52.6L24 37.37");
}

.mds1wrbrw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35.15 37.37h4.54a2.12 2.12 0 0 0 1.85-3.16L26 6.69a2.32 2.32 0 0 0-4.06 0L6.46 34.21a2.12 2.12 0 0 0 1.85 3.16h4.54M24 17.58v19.79");
}
</style><path class="jwyztr91h"/><path class="mds1wrbrw"/>`,
		"fallback": "arcticons:androidauto",
	});
}

export default Component;
