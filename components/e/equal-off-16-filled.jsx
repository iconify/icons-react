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
		"content": `<style>.mxui6-jil {
  fill: currentColor;
  d: path("m10.293 11l3.853 3.854a.5.5 0 0 0 .708-.708l-13-13a.5.5 0 1 0-.708.708L3.793 4.5H2.75a.75.75 0 0 0 0 1.5h2.543l3.5 3.5H2.75a.75.75 0 0 0 0 1.5zm1.328-1.5l1.5 1.5h.129a.75.75 0 0 0 0-1.5zm-5-5l1.5 1.5h5.129a.75.75 0 0 0 0-1.5z");
}
</style><path class="mxui6-jil"/>`,
		"fallback": "fluent:equal-off-16-filled",
	});
}

export default Component;
