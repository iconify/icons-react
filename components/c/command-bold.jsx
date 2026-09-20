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
		"content": `<style>.i_b19ybto {
  fill: currentColor;
  d: path("M180 140h-16v-24h16a40 40 0 1 0-40-40v16h-24V76a40 40 0 1 0-40 40h16v24H76a40 40 0 1 0 40 40v-16h24v16a40 40 0 1 0 40-40m-16-64a16 16 0 1 1 16 16h-16ZM60 76a16 16 0 0 1 32 0v16H76a16 16 0 0 1-16-16m32 104a16 16 0 1 1-16-16h16Zm24-64h24v24h-24Zm64 80a16 16 0 0 1-16-16v-16h16a16 16 0 0 1 0 32");
}
</style><path class="i_b19ybto"/>`,
		"fallback": "ph:command-bold",
	});
}

export default Component;
