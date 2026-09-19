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
		"content": `<style>.cgc4jiiot {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m41.818 5.5l-35.635 37v-37l35.614 37");
}

.lqily1bza {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m34.932 24.118l6.798-6.798v13.51z");
}
</style><path class="cgc4jiiot"/><path class="lqily1bza"/>`,
		"fallback": "arcticons:easycut",
	});
}

export default Component;
