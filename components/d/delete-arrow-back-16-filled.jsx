import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ufi3njwsa {
  fill: currentColor;
  d: path("M9 3a1 1 0 0 0-2 0zM6 3a2 2 0 1 1 4 0h4a.5.5 0 0 1 0 1h-.564l-.233 1.71A5.5 5.5 0 0 0 7.337 15H6.246a2.5 2.5 0 0 1-2.477-2.162L2.564 4H2a.5.5 0 0 1 0-1zm4.5 12a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m-.896-6.396l-.897.896h1.543A2.75 2.75 0 0 1 13 12.25v.25a.5.5 0 0 1-1 0v-.25a1.75 1.75 0 0 0-1.75-1.75H8.707l.897.896a.5.5 0 0 1-.708.708L7.144 10.35a.5.5 0 0 1 .002-.705l1.75-1.75a.5.5 0 1 1 .708.708");
}
</style><path class="ufi3njwsa"/>`,
		"fallback": "fluent:delete-arrow-back-16-filled",
	});
}

export default Component;
