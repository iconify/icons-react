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
		"content": `<style>.g0bm68uvz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.717 11.431C11.208 11.431 3.5 19.14 3.5 28.65m23.783 7.973c9.509 0 17.218-7.709 17.218-17.218M11.42 27.282c0 9.51 7.708 17.218 17.218 17.218m7.973-23.782c0-9.51-7.708-17.218-17.217-17.218");
}
</style><path class="g0bm68uvz"/>`,
		"fallback": "arcticons:element",
	});
}

export default Component;
