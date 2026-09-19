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
		"content": `<style>.sd0d8x-gq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M3 23.5C3 35.374 12.626 45 24.5 45S46 35.374 46 23.5S36.374 2 24.5 2S3 11.626 3 23.5");
}

.vr_9fdc1e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6.993 21.196C8.276 11.527 17.155 4.73 26.824 6.013a17.66 17.66 0 0 1 15.183 15.183H26.804V9.832a13.82 13.82 0 0 1 10.058 7.525h-5.451m-24.418 3.84h15.203V9.831a13.82 13.82 0 0 0-10.058 7.525h5.451M6.993 25.804c1.283 9.669 10.162 16.466 19.831 15.183a17.66 17.66 0 0 0 15.183-15.183H26.804v11.364a13.82 13.82 0 0 0 10.058-7.525h-5.451m-24.418-3.84h15.203v11.365a13.82 13.82 0 0 1-10.058-7.525h5.451M12.061 11.06l2.457 2.457m22.421 22.421l-2.457-2.457M12.061 35.94l2.457-2.457m22.421-22.421l-2.457 2.457M10.755 25.804a13.8 13.8 0 0 1 0-4.607m27.49 4.607a13.8 13.8 0 0 0 0-4.607");
}
</style><path class="vr_9fdc1e"/><path class="sd0d8x-gq"/>`,
		"fallback": "arcticons:emoji-rounded-symbol-for-lu",
	});
}

export default Component;
