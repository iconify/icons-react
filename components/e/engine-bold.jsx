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
		"content": `<style>.rvqmrqbqs {
  fill: currentColor;
  d: path("M236 100h-11l-34.17-34.14A19.86 19.86 0 0 0 176.69 60H144V44h20a12 12 0 0 0 0-24h-64a12 12 0 0 0 0 24h20v16H64a20 20 0 0 0-20 20v48H28v-20a12 12 0 0 0-24 0v64a12 12 0 0 0 24 0v-20h16v16.69a19.86 19.86 0 0 0 5.86 14.14l39.31 39.31a19.86 19.86 0 0 0 14.14 5.86h73.38a19.86 19.86 0 0 0 14.14-5.86L225 188h11a20 20 0 0 0 20-20v-48a20 20 0 0 0-20-20m-4 64h-12a12 12 0 0 0-8.49 3.51L175 204h-70l-37-37V84h107l36.48 36.49A12 12 0 0 0 220 124h12Z");
}
</style><path class="rvqmrqbqs"/>`,
		"fallback": "ph:engine-bold",
	});
}

export default Component;
