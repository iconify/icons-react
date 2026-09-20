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
		"content": `<style>.dmq_yhg7o {
  fill: currentColor;
  d: path("M208 28H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 24v63.72l-17.86-17.86a20 20 0 0 0-28.28 0L52 203.72V52ZM85.66 204L172 117.66l32 32V204ZM76 96a20 20 0 1 1 20 20a20 20 0 0 1-20-20");
}
</style><path class="dmq_yhg7o"/>`,
		"fallback": "ph:image-square-bold",
	});
}

export default Component;
