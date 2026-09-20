import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.qk7edkx-k {
  fill: currentColor;
  d: path("M14.238 2.18a.75.75 0 0 0-.976 1.14l1.75 1.5c.28.24.695.24.976 0l1.75-1.5a.75.75 0 1 0-.976-1.14L15.5 3.263zM10 4a.75.75 0 0 0-.695.469l-4.25 10.5a.75.75 0 1 0 1.39.562L7.875 12h4.25l1.43 3.531a.75.75 0 1 0 1.39-.563l-4.25-10.5A.75.75 0 0 0 10 4m0 2.749l1.518 3.75H8.482z");
}
</style><path class="qk7edkx-k"/>`,
		"fallback": "fluent:font-decrease-20-filled",
	});
}

export default Component;
