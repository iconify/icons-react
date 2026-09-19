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
		"content": `<style>.wv3req0xe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 23.989c0 10.217 8.283 18.5 18.5 18.5s18.5-8.283 18.5-18.5zM19.562 6.028a3.16 3.16 0 0 0 .906 1.967a3.19 3.19 0 0 1 0 4.51a3.19 3.19 0 0 0 0 4.511a3.19 3.19 0 0 1 0 4.51m2.62-16.014c-.064.891.23 1.802.912 2.483a3.19 3.19 0 0 1 0 4.51a3.19 3.19 0 0 0 0 4.511a3.19 3.19 0 0 1 0 4.51M26.559 5.67a3.17 3.17 0 0 0 .927 2.325a3.19 3.19 0 0 1 0 4.51a3.19 3.19 0 0 0 0 4.511a3.19 3.19 0 0 1 0 4.51M5.5 17.06l6.52 6.928");
}
</style><path class="wv3req0xe"/>`,
		"fallback": "arcticons:emoji-pot-of-food",
	});
}

export default Component;
