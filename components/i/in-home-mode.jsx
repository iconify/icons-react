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
		"content": `<style>.g9s2vurcx {
  fill: currentColor;
  d: path("m14.637 21l-3.533-3.538l.708-.714l2.825 2.825l5.675-5.65l.688.714zM5 19V9.452l-2.396 1.779l-.598-.787L12 3l10.02 7.439l-.604.792l-1.033-.754l-5.747 5.733l-2.825-2.844l-4.12 4.146L9.172 19z");
}
</style><path class="g9s2vurcx"/>`,
		"fallback": "material-symbols-light:in-home-mode",
	});
}

export default Component;
