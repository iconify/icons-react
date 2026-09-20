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
		"content": `<style>.f0skhqbiq {
  fill: currentColor;
  d: path("m229.66 114.34l-96-96a8 8 0 0 0-11.32 0l-96 96A8 8 0 0 0 32 128h40v24a8 8 0 0 0 8 8h96a8 8 0 0 0 8-8v-24h40a8 8 0 0 0 5.66-13.66M176 112a8 8 0 0 0-8 8v24H88v-24a8 8 0 0 0-8-8H51.31L128 35.31L204.69 112Zm8 104a8 8 0 0 1-8 8H80a8 8 0 0 1 0-16h96a8 8 0 0 1 8 8m0-32a8 8 0 0 1-8 8H80a8 8 0 0 1 0-16h96a8 8 0 0 1 8 8");
}
</style><path class="f0skhqbiq"/>`,
		"fallback": "ph:arrow-fat-lines-up",
	});
}

export default Component;
