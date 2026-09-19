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
		"content": `<style>.qlloyav1u {
  width: 27px;
  height: 39px;
  x: 9.676px;
  y: 4.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 3px;
  ry: 3px;
}

.vji_k90sy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.574 12.409h15.341m-15.341 4.206h15.341m-15.341 4.206h15.341m-15.341 4.206h13.909m-13.909 4.206h11.608m3.809-2.889l9.333-9.333");
}
</style><rect class="qlloyav1u"/><path class="vji_k90sy"/>`,
		"fallback": "arcticons:beautyxt",
	});
}

export default Component;
