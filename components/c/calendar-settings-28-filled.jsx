import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.v6ej-_48v {
  fill: currentColor;
  d: path("M25 9.5v5A7.5 7.5 0 0 0 14.5 25H6.25A3.25 3.25 0 0 1 3 21.75V9.5zM21.75 3A3.25 3.25 0 0 1 25 6.25V8H3V6.25A3.25 3.25 0 0 1 6.25 3zm-4.954 13.699a2 2 0 0 1-1.441 2.496l-1.024.253a6.8 6.8 0 0 0 .008 2.152l.976.235a2 2 0 0 1 1.45 2.51l-.324 1.098c.518.46 1.11.835 1.753 1.1l.843-.886a2 2 0 0 1 2.899 0l.85.895a6.2 6.2 0 0 0 1.751-1.09l-.335-1.16a2 2 0 0 1 1.441-2.495l1.026-.254a6.8 6.8 0 0 0-.008-2.152l-.977-.235a2 2 0 0 1-1.45-2.51l.324-1.1a6.2 6.2 0 0 0-1.753-1.1l-.843.888a2 2 0 0 1-2.9 0l-.849-.895a6.2 6.2 0 0 0-1.751 1.09zM20.5 22a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3");
}
</style><path class="v6ej-_48v"/>`,
		"fallback": "fluent:calendar-settings-28-filled",
	});
}

export default Component;
