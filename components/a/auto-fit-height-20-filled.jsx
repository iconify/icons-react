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
		"content": `<style>.gqd60cc4i {
  fill: currentColor;
  d: path("M4.25 2a.75.75 0 0 0 0 1.5h11a.75.75 0 0 0 0-1.5zm0 14.5a.75.75 0 0 0 0 1.5h11a.75.75 0 0 0 0-1.5zm6.03-1.72l2-2a.75.75 0 1 0-1.06-1.06l-.72.72V7.56l.72.72a.75.75 0 1 0 1.06-1.06l-2-2a.75.75 0 0 0-1.06 0l-2 2a.75.75 0 0 0 1.06 1.06L9 7.56v4.88l-.72-.72a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0");
}
</style><path class="gqd60cc4i"/>`,
		"fallback": "fluent:auto-fit-height-20-filled",
	});
}

export default Component;
