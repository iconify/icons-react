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
		"content": `<style>.d65kvlbgx {
  fill: currentColor;
  d: path("M13 5a1 1 0 1 0 0-2h-2a1 1 0 1 0 0 2zm-8 6a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0zm9 9a1 1 0 0 1-1 1h-2a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1M6 3a1 1 0 0 1 0 2a1 1 0 0 0-1 1a1 1 0 0 1-2 0a3 3 0 0 1 3-3m1 17a1 1 0 0 1-1 1a3 3 0 0 1-3-3a1 1 0 1 1 2 0a1 1 0 0 0 1 1a1 1 0 0 1 1 1m11 1a1 1 0 1 1 0-2a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1a1 1 0 1 1 0-2a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3");
}
</style><path class="d65kvlbgx"/>`,
		"fallback": "fluent:border-right-24-filled",
	});
}

export default Component;
