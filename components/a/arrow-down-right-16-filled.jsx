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
		"content": `<style>.vbadqictn {
  fill: currentColor;
  d: path("M7 13.25c0 .414.335.75.75.75h5.5a.75.75 0 0 0 .75-.75v-5.5a.75.75 0 0 0-1.5 0v3.69L3.28 2.22a.75.75 0 1 0-1.06 1.06l9.22 9.22H7.75a.75.75 0 0 0-.75.75");
}
</style><path class="vbadqictn"/>`,
		"fallback": "fluent:arrow-down-right-16-filled",
	});
}

export default Component;
