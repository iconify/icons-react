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
		"content": `<style>.yrr09638b {
  fill: currentColor;
  d: path("M176 32H80a24 24 0 0 0-24 24v168a24 24 0 0 0 24 24h96a24 24 0 0 0 24-24V56a24 24 0 0 0-24-24m8 192a8 8 0 0 1-8 8H80a8 8 0 0 1-8-8V56a8 8 0 0 1 8-8h96a8 8 0 0 1 8 8Zm-16-24a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8M88 8a8 8 0 0 1 8-8h64a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8m80 152a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8");
}
</style><path class="yrr09638b"/>`,
		"fallback": "ph:battery-vertical-medium",
	});
}

export default Component;
