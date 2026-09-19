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
		"content": `<style>.b_dru2n5h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.789 35.514a8.288 8.288 0 1 1 5.328-14.638m0 0a9.946 9.946 0 1 1 19.49 3.893m.006-.007a5.387 5.387 0 1 1 .5 10.752m-25.324 0h25.324");
}
</style><path class="b_dru2n5h"/>`,
		"fallback": "arcticons:dreamlab",
	});
}

export default Component;
