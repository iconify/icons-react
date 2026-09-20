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
		"content": `<style>.agnfm0s3w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.979 31.57L31.1 22.84c2.666-1.54 2.666-5.389 0-6.928");
}

.cu68273xl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.979 6.035c-2.667-1.539-6 .386-6 3.465v29c0 3.08 3.333 5.004 6 3.465l25.113-14.5c2.668-1.54 2.668-5.39 0-6.93z");
}

.ivo7kybbv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.979 16.43v17.451c0 3.08 3.333 5.004 6 3.465");
}

.wok6xcq-q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m29.092 24l-15.12-8.73c-2.667-1.54-6 .386-6 3.465");
}
</style><path class="cu68273xl"/><path class="ivo7kybbv"/><path class="wok6xcq-q"/><path class="agnfm0s3w"/>`,
		"fallback": "arcticons:flux-3",
	});
}

export default Component;
