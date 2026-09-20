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
		"content": `<style>.l_xravbqp {
  fill: currentColor;
  d: path("m220.72 124.29l-88-112a6 6 0 0 0-9.44 0l-88 112a6 6 0 0 0 0 7.42l88 112a6 6 0 0 0 9.44 0l88-112a6 6 0 0 0 0-7.42M134 33.35l72.56 92.35l-72.56 33Zm-12 125.33l-72.56-33L122 33.35Zm0 13.18v50.79l-62.08-79Zm12 0l62.08-28.21l-62.08 79Z");
}
</style><path class="l_xravbqp"/>`,
		"fallback": "ph:currency-eth-light",
	});
}

export default Component;
