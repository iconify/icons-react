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
		"content": `<style>.bag4m3bbr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 42.27h28.377L42.5 13.893H14.123zm37-28.428H14.123L5.5 5.73h28.377zM5.5 42.27V5.73");
}

.kmlaeexkp {
  d: path("M24.768 25.6c2.651 0 4.143 2.149 3.333 4.8s-3.617 4.8-6.268 4.8s-4.143-2.149-3.332-4.8s3.616-4.8 6.267-4.8");
}

.y7knt5bkx {
  d: path("M29.959 22.578c-.385-1.067-1.412-1.778-3.368-1.778h-.356c-2.666 0-5.452 2.133-6.267 4.8l-1.467 4.8");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="kmlaeexkp"/><path class="y7knt5bkx"/></g><path class="bag4m3bbr"/>`,
		"fallback": "arcticons:calendar-tuta-6",
	});
}

export default Component;
