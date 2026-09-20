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
		"content": `<style>.qyfvn388a {
  fill: currentColor;
  d: path("M117.82 121.39A42 42 0 0 0 86 52H32a12 12 0 0 0-12 12v128a12 12 0 0 0 12 12h58a46 46 0 0 0 27.82-82.61M44 76h42a18 18 0 0 1 0 36H44Zm46 104H44v-44h46a22 22 0 0 1 0 44m66-104a12 12 0 0 1 12-12h64a12 12 0 0 1 0 24h-64a12 12 0 0 1-12-12m44 24a52 52 0 0 0 0 104a51.45 51.45 0 0 0 22.7-5.21a12 12 0 1 0-10.49-21.58A27.7 27.7 0 0 1 200 180a28.05 28.05 0 0 1-25.3-16H240a12 12 0 0 0 12-12a52.06 52.06 0 0 0-52-52m-25.3 40a28 28 0 0 1 50.6 0Z");
}
</style><path class="qyfvn388a"/>`,
		"fallback": "ph:behance-logo-bold",
	});
}

export default Component;
