import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.v-6decdjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 10h4.75m0 0a4.25 4.25 0 1 0 8.5 0a4.25 4.25 0 1 0-8.5 0Zm8.5 0h5.75M18 15v6m-3-3h6");
}
</style><path class="v-6decdjh"/>`,
		"fallback": "uix-sharp:git-commit-plus",
	});
}

export default Component;
