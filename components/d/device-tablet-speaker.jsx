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
		"content": `<style>.p75u0lbrd {
  fill: currentColor;
  d: path("M192 24H64a24 24 0 0 0-24 24v160a24 24 0 0 0 24 24h128a24 24 0 0 0 24-24V48a24 24 0 0 0-24-24m8 184a8 8 0 0 1-8 8H64a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h128a8 8 0 0 1 8 8ZM168 64a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8");
}
</style><path class="p75u0lbrd"/>`,
		"fallback": "ph:device-tablet-speaker",
	});
}

export default Component;
