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
		"content": `<style>.ewjx2zb7l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.565 17.542C-8.049 45.737 22.595 34.425 43.2 21.824");
}

.ktq94y3-l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.839 39.499c22.126-58.422 27.511-19.977 26.913 0");
}
</style><path class="ewjx2zb7l"/><path class="ktq94y3-l"/>`,
		"fallback": "arcticons:alphapolis",
	});
}

export default Component;
