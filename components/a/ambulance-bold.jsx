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
		"content": `<style>.uczj16b-c {
  fill: currentColor;
  d: path("M80 120a12 12 0 0 1 12-12h8v-8a12 12 0 0 1 24 0v8h8a12 12 0 0 1 0 24h-8v8a12 12 0 0 1-24 0v-8h-8a12 12 0 0 1-12-12m176 0v64a20 20 0 0 1-20 20h-10.06a36 36 0 0 1-67.88 0h-44.12a36 36 0 0 1-67.88 0H32a20 20 0 0 1-20-20V72a20 20 0 0 1 20-20h152a12 12 0 0 1 12 12v4h26.58a19.9 19.9 0 0 1 18.57 12.57l14 35A12 12 0 0 1 256 120m-60-28v16h30.28l-6.4-16ZM36 180h10.06a36 36 0 0 1 67.88 0h44.12A36.32 36.32 0 0 1 172 162.08V76H36Zm56 12a12 12 0 1 0-12 12a12 12 0 0 0 12-12m112 0a12 12 0 1 0-12 12a12 12 0 0 0 12-12m28-12v-48h-36v24.23A36.09 36.09 0 0 1 225.94 180Z");
}
</style><path class="uczj16b-c"/>`,
		"fallback": "ph:ambulance-bold",
	});
}

export default Component;
