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
		"content": `<style>.vt5oqxf9y {
  fill: currentColor;
  d: path("M148 176a12 12 0 0 1-12 12h-16a12 12 0 0 1 0-24h16a12 12 0 0 1 12 12m-28-84h16a12 12 0 0 0 0-24h-16a12 12 0 0 0 0 24m100-52v176a20 20 0 0 1-20 20H56a20 20 0 0 1-20-20V40a20 20 0 0 1 20-20h144a20 20 0 0 1 20 20M60 44v72h136V44Zm136 168v-72H60v72Z");
}
</style><path class="vt5oqxf9y"/>`,
		"fallback": "ph:dresser-bold",
	});
}

export default Component;
