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
		"content": `<style>.r7d0xl8fx {
  fill: currentColor;
  d: path("M8 14A6 6 0 1 1 8 2a6 6 0 0 1 0 12M6.25 7.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m-.114 1.917a.5.5 0 1 0-.745.667A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 2.609-1.166a.5.5 0 1 0-.745-.667A2.5 2.5 0 0 1 8 10.5c-.74 0-1.405-.321-1.864-.833M9.75 7.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5");
}
</style><path class="r7d0xl8fx"/>`,
		"fallback": "fluent:emoji-16-filled",
	});
}

export default Component;
