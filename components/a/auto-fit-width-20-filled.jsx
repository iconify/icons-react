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
		"content": `<style>.e3ooglsnu {
  fill: currentColor;
  d: path("M18 4.25a.75.75 0 0 0-1.5 0v11a.75.75 0 0 0 1.5 0zm-14.5 0a.75.75 0 0 0-1.5 0v11a.75.75 0 0 0 1.5 0zm1.72 6.03l2 2a.75.75 0 0 0 1.06-1.06l-.72-.72h4.88l-.72.72a.75.75 0 1 0 1.06 1.06l2-2a.75.75 0 0 0 0-1.06l-2-2a.75.75 0 1 0-1.06 1.06l.72.72H7.56l.72-.72a.75.75 0 0 0-1.06-1.06l-2 2a.75.75 0 0 0 0 1.06");
}
</style><path class="e3ooglsnu"/>`,
		"fallback": "fluent:auto-fit-width-20-filled",
	});
}

export default Component;
