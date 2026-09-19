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
		"content": `<style>.h2jn7k01r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.375 25.486L4.5 14.063h20.08l4.287 4.503M40.914 31.22l2.586 2.717H23.42l-5.832-6.126");
}

.hp8b2gbwy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m35.195 23.388l6.053 6.358m-25.972.001l4.827-12.407h1.794l4.828 12.406m3.619 0V17.34h8.828c1.734 0 3.13 1.349 3.13 3.024s-1.396 3.024-3.13 3.024h-8.827");
}
</style><path class="h2jn7k01r"/><path class="hp8b2gbwy"/>`,
		"fallback": "arcticons:assoluto-racing",
	});
}

export default Component;
