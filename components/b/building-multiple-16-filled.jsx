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
		"content": `<style>.ukv_o0lgt {
  fill: currentColor;
  d: path("M4.5 10a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1m0-2a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1m0-2a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1m0-2a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1m4-2A1.5 1.5 0 0 1 10 3.5V5h2.5A1.5 1.5 0 0 1 14 6.5v7a.5.5 0 0 1-.5.5h-1.25a.25.25 0 0 1-.25-.25V12a.5.5 0 0 0-.4-.49l-.1-.01h-2a.5.5 0 0 0-.49.4L9 12v1.75a.25.25 0 0 1-.25.25H3a1 1 0 0 1-1-1V3.5A1.5 1.5 0 0 1 3.5 2zm-5 1a.5.5 0 0 0-.5.5V13h4V6.5A1.5 1.5 0 0 1 8.5 5H9V3.5a.5.5 0 0 0-.5-.5zm6 6a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1m2 0a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1m-2-2a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1m2 0a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1");
}
</style><path class="ukv_o0lgt"/>`,
		"fallback": "fluent:building-multiple-16-filled",
	});
}

export default Component;
