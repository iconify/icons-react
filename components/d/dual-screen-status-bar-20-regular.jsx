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
		"content": `<style>.vbz9zjmpp {
  fill: currentColor;
  d: path("M2 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h5.5V5zm12 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-5.5v10zm-4-9a.5.5 0 0 0 0 1h3.5a.5.5 0 0 0 0-1z");
}
</style><path class="vbz9zjmpp"/>`,
		"fallback": "fluent:dual-screen-status-bar-20-regular",
	});
}

export default Component;
