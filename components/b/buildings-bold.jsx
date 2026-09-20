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
		"content": `<style>.g0jtrd5tm {
  fill: currentColor;
  d: path("M240 204h-12V96a20 20 0 0 0-20-20h-36V32a20 20 0 0 0-28.45-18.12l-104 48.54A20.06 20.06 0 0 0 28 80.55V204H16a12 12 0 0 0 0 24h224a12 12 0 0 0 0-24m-36-104v104h-32V100ZM52 83.09l96-44.79V204H52ZM132 112v12a12 12 0 0 1-24 0v-12a12 12 0 0 1 24 0m-40 0v12a12 12 0 0 1-24 0v-12a12 12 0 0 1 24 0m0 52v12a12 12 0 0 1-24 0v-12a12 12 0 0 1 24 0m40 0v12a12 12 0 0 1-24 0v-12a12 12 0 0 1 24 0");
}
</style><path class="g0jtrd5tm"/>`,
		"fallback": "ph:buildings-bold",
	});
}

export default Component;
