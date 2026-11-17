import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.d1ga4jz5w {
  fill: currentColor;
  d: path("M11.419 2.186a1 1 0 0 1 1.162 0c.404.289.787.607 1.164.93a25 25 0 0 1 2.508 2.475c.989 1.132 1.874 2.365 2.548 3.712c1.232 2.465 1.665 5.221.57 7.811a8 8 0 0 1-1.714 2.543A8 8 0 0 1 4 14c.001-3.174 1.714-6.085 3.747-8.409a25 25 0 0 1 2.508-2.475c.377-.323.76-.641 1.164-.93M9 13a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2Z");
}
</style><path class="d1ga4jz5w"/>`,
		"fallback": "coolicons:droplet-minus-fill",
	});
}

export default Component;
