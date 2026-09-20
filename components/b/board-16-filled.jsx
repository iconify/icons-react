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
		"content": `<style>.u_sqknt2z {
  fill: currentColor;
  d: path("M7.5 2v3H2v-.5A2.5 2.5 0 0 1 4.5 2zm1 0v8H14V4.5A2.5 2.5 0 0 0 11.5 2zm5.5 9H8.5v3h3a2.5 2.5 0 0 0 2.5-2.5zm-6.5 3V6H2v5.5A2.5 2.5 0 0 0 4.5 14z");
}
</style><path class="u_sqknt2z"/>`,
		"fallback": "fluent:board-16-filled",
	});
}

export default Component;
