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
		"content": `<style>.zre52-7kj {
  fill: currentColor;
  d: path("M220 152a4 4 0 0 1-4 4h-16v52a4 4 0 0 1-8 0v-52h-16a4 4 0 0 1 0-8h40a4 4 0 0 1 4 4M88 172a24 24 0 0 1-24 24H52v12a4 4 0 0 1-8 0v-56a4 4 0 0 1 4-4h16a24 24 0 0 1 24 24m-8 0a16 16 0 0 0-16-16H52v32h12a16 16 0 0 0 16-16m76 0a24 24 0 0 1-24 24h-12v12a4 4 0 0 1-8 0v-56a4 4 0 0 1 4-4h16a24 24 0 0 1 24 24m-8 0a16 16 0 0 0-16-16h-12v32h12a16 16 0 0 0 16-16M44 112V40a12 12 0 0 1 12-12h96a4 4 0 0 1 2.83 1.17l56 56A4 4 0 0 1 212 88v24a4 4 0 0 1-8 0V92h-52a4 4 0 0 1-4-4V36H56a4 4 0 0 0-4 4v72a4 4 0 0 1-8 0m112-28h42.34L156 41.65Z");
}
</style><path class="zre52-7kj"/>`,
		"fallback": "ph:file-ppt-thin",
	});
}

export default Component;
