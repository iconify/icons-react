import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.qteibii6s {
  fill: currentColor;
  d: path("M1 3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H6.651l-2.874 1.916A.5.5 0 0 1 3 10.5V9a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h.5a.5.5 0 0 1 .5.5v1.066l2.223-1.482A.5.5 0 0 1 6.5 8H9a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z");
}
</style><path class="qteibii6s"/>`,
		"fallback": "fluent:comment-12-regular",
	});
}

export default Component;
