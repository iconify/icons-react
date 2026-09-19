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
		"content": `<style>.ajtq-ubkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.988 43.958c11.021-4.412 16.379-16.923 11.967-27.944C39.543 4.994 27.032-.364 16.012 4.048S-.367 20.971 4.045 31.991a21.49 21.49 0 0 0 19.946 13.506V16.005l-5 2.5");
}
</style><path class="ajtq-ubkq"/>`,
		"fallback": "arcticons:chennai-one",
	});
}

export default Component;
