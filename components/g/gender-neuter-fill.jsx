import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.jkdq22bok {
  fill: currentColor;
  d: path("M167.84 108.35a40 40 0 1 1-36.19-36.19a40 40 0 0 1 36.19 36.19M216 40v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16m-32 72a56 56 0 1 0-64 55.42v32.31a8.18 8.18 0 0 0 7.47 8.25a8 8 0 0 0 8.53-8v-32.56A56.09 56.09 0 0 0 184 112");
}
</style><path class="jkdq22bok"/>`,
		"fallback": "ph:gender-neuter-fill",
	});
}

export default Component;
