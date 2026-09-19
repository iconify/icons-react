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
		"content": `<style>.e40phdcpi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  d: path("m19.568 4.5l-4.875 39m18.614-39l-4.875 39M9.818 31.09H36.41M11.59 16.023h26.592");
}
</style><path class="e40phdcpi"/>`,
		"fallback": "arcticons:hasheasily",
	});
}

export default Component;
