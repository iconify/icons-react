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
		"content": `<style>.jorh1p-8w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.908 4.5a3.9 3.9 0 0 0-3.907 3.908v18.738a8.75 8.75 0 0 0-4.35-1.16a8.756 8.756 0 0 0-8.754 8.756a8.756 8.756 0 1 0 17.51 0a9 9 0 0 0-.007-.287l.014.023V13.299h4.782a3.9 3.9 0 0 0 3.907-3.908v-.983A3.9 3.9 0 0 0 33.196 4.5z");
}
</style><path class="jorh1p-8w"/>`,
		"fallback": "arcticons:fossify-musicplayer",
	});
}

export default Component;
