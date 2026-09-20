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
		"content": `<style>.rzt747w1f {
  fill: currentColor;
  d: path("m232.49 111.51l-96-96a12 12 0 0 0-17 0l-96 96A12 12 0 0 0 32 132h36v4a12 12 0 0 0 12 12h96a12 12 0 0 0 12-12v-4h36a12 12 0 0 0 8.49-20.49M176 108a12 12 0 0 0-12 12v4H92v-4a12 12 0 0 0-12-12H61l67-67l67 67Zm12 108a12 12 0 0 1-12 12H80a12 12 0 0 1 0-24h96a12 12 0 0 1 12 12m0-40a12 12 0 0 1-12 12H80a12 12 0 0 1 0-24h96a12 12 0 0 1 12 12");
}
</style><path class="rzt747w1f"/>`,
		"fallback": "ph:arrow-fat-lines-up-bold",
	});
}

export default Component;
