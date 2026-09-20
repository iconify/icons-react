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
		"content": `<style>.tc9qe5b0c {
  fill: currentColor;
  d: path("M232 220h-20V36h4a12 12 0 0 0 0-24H40a12 12 0 0 0 0 24h4v184H24a12 12 0 0 0 0 24h208a12 12 0 0 0 0-24M68 36h120v184h-24v-36a12 12 0 0 0-12-12h-48a12 12 0 0 0-12 12v36H68Zm72 184h-24v-24h24ZM84 64a12 12 0 0 1 12-12h12a12 12 0 0 1 0 24H96a12 12 0 0 1-12-12m52 0a12 12 0 0 1 12-12h12a12 12 0 0 1 0 24h-12a12 12 0 0 1-12-12m-52 40a12 12 0 0 1 12-12h12a12 12 0 0 1 0 24H96a12 12 0 0 1-12-12m52 0a12 12 0 0 1 12-12h12a12 12 0 0 1 0 24h-12a12 12 0 0 1-12-12m-52 40a12 12 0 0 1 12-12h12a12 12 0 0 1 0 24H96a12 12 0 0 1-12-12m52 0a12 12 0 0 1 12-12h12a12 12 0 0 1 0 24h-12a12 12 0 0 1-12-12");
}
</style><path class="tc9qe5b0c"/>`,
		"fallback": "ph:building-bold",
	});
}

export default Component;
