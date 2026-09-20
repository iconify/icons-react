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
		"content": `<style>.bq8pwqb9c {
  fill: currentColor;
  d: path("M4 7.25A3.25 3.25 0 0 1 7.25 4h33.5a3.25 3.25 0 0 1 0 6.5H7.25A3.25 3.25 0 0 1 4 7.25M24 18.5a8.5 8.5 0 1 0 0 17a8.5 8.5 0 0 0 0-17m0 2.5a6 6 0 1 1 0 12a6 6 0 0 1 0-12m18-8H6v13c0 9.941 8.059 18 18 18s18-8.059 18-18zM13 27c0-6.075 4.925-11 11-11s11 4.925 11 11s-4.925 11-11 11s-11-4.925-11-11");
}
</style><path class="bq8pwqb9c"/>`,
		"fallback": "fluent:camera-dome-48-filled",
	});
}

export default Component;
