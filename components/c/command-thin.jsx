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
		"content": `<style>.tq_qo0bvw {
  fill: currentColor;
  d: path("M180 148h-24v-40h24a32 32 0 1 0-32-32v24h-40V76a32 32 0 1 0-32 32h24v40H76a32 32 0 1 0 32 32v-24h40v24a32 32 0 1 0 32-32m-24-72a24 24 0 1 1 24 24h-24ZM52 76a24 24 0 0 1 48 0v24H76a24 24 0 0 1-24-24m48 104a24 24 0 1 1-24-24h24Zm8-72h40v40h-40Zm72 96a24 24 0 0 1-24-24v-24h24a24 24 0 0 1 0 48");
}
</style><path class="tq_qo0bvw"/>`,
		"fallback": "ph:command-thin",
	});
}

export default Component;
