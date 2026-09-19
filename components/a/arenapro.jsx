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
		"content": `<style>.luu10kq5n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 26.957h37M13.759 42.405l-8.256-4.767V16.276L24 5.595l18.498 10.68v21.363l-8.256 4.767");
}
</style><path class="luu10kq5n"/>`,
		"fallback": "arcticons:arenapro",
	});
}

export default Component;
