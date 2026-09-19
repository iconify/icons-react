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
		"content": `<style>.ak0c6bb7j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.257 27.772C37.19 27.772 42 22.962 42 17.029S37.19 6.286 31.257 6.286c-2.82 0-5.386 1.086-7.303 2.864");
}

.l9jiucztn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.026 29.562a6.076 6.076 0 1 1 0 12.152H6V17.409h10.026a6.076 6.076 0 1 1 0 12.153m0 0H6m21.526-8.802a5.276 5.276 0 1 0 3.731-9.007");
}
</style><path class="l9jiucztn"/><path class="ak0c6bb7j"/>`,
		"fallback": "arcticons:bluelink",
	});
}

export default Component;
