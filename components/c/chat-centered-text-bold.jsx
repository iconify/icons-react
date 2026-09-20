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
		"content": `<style>.u91w_9bpd {
  fill: currentColor;
  d: path("M84 100a12 12 0 0 1 12-12h64a12 12 0 0 1 0 24H96a12 12 0 0 1-12-12m12 52h64a12 12 0 0 0 0-24H96a12 12 0 0 0 0 24m140-96v128a20 20 0 0 1-20 20h-58.11l-12.52 21.92a20 20 0 0 1-34.74 0L98.11 204H40a20 20 0 0 1-20-20V56a20 20 0 0 1 20-20h176a20 20 0 0 1 20 20m-24 4H44v120h61.07a12 12 0 0 1 10.42 6.05L128 207.94l12.51-21.89a12 12 0 0 1 10.42-6.05H212Z");
}
</style><path class="u91w_9bpd"/>`,
		"fallback": "ph:chat-centered-text-bold",
	});
}

export default Component;
