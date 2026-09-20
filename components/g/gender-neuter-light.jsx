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
		"content": `<style>.ex8moqbfl {
  fill: currentColor;
  d: path("M206 104a78 78 0 1 0-84 77.75V232a6 6 0 0 0 12 0v-50.25A78.09 78.09 0 0 0 206 104m-78 66a66 66 0 1 1 66-66a66.08 66.08 0 0 1-66 66");
}
</style><path class="ex8moqbfl"/>`,
		"fallback": "ph:gender-neuter-light",
	});
}

export default Component;
