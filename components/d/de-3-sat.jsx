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
		"content": `<style>.hwn9df2lg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.43 10.538h15.337L35.805 4.5H8.39z");
}

.phdj3eblz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.803 20.49L35.805 4.5l3.804 3.804l-16.001 15.99z");
}

.wet5n_boy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m8.5 36.237l5.241-4.432c8.043 11.678 24.953 1.843 12.764-10.403l4.83-4.83c16.4 16.67-5.3 38.493-22.835 19.666Z");
}
</style><path class="hwn9df2lg"/><path class="phdj3eblz"/><path class="wet5n_boy"/>`,
		"fallback": "arcticons:de-3-sat",
	});
}

export default Component;
