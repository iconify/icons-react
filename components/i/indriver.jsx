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
		"content": `<style>.vslr47eqd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 5.5h8.954v8.954H5.5zm0 16.777h8.954v20.076H5.5zM24 33.399a9.472 9.472 0 0 0 0-18.945V5.5a18.5 18.5 0 0 1 0 37Z");
}
</style><path class="vslr47eqd"/>`,
		"fallback": "arcticons:indriver",
	});
}

export default Component;
