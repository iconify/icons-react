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
		"content": `<style>.ar_detoxq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.202 12.344a23.6 23.6 0 0 1-.434-4.357c-.01-1.459-1.161-2.657-2.612-2.802l-6.732-.67c-1.731-.172-3.213 1.19-3.233 2.93c-.194 17.523 12.265 32.737 29.482 36.002c1.71.324 3.337-.856 3.51-2.587l.597-6.001c.218-2.191-.73-3.552-2.158-3.85a23.6 23.6 0 0 1-4.186-1.283a4.8 4.8 0 0 0-4.866.74l-3.168 2.593A30.6 30.6 0 0 1 15.35 19.562l3.168-2.594a4.8 4.8 0 0 0 1.685-4.624");
}

.j3od30b-y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24.85 17.018l.881 7.034l9.734-14.05");
}
</style><path class="ar_detoxq"/><path class="j3od30b-y"/>`,
		"fallback": "arcticons:callinsider",
	});
}

export default Component;
