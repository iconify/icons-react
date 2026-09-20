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
		"content": `<style>.c33za5uaq {
  fill: currentColor;
  d: path("M4 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-2v2h1a.5.5 0 0 1 0 1h-2v-6a3 3 0 0 0-3-3H4zm6 14H7.5V8H10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2M4 8h2.5v10H4a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2m5.5 7a.5.5 0 0 0 0 1h.5a.5.5 0 0 0 0-1zm-6 .5a.5.5 0 0 0 .5.5h.5a.5.5 0 0 0 0-1H4a.5.5 0 0 0-.5.5");
}
</style><path class="c33za5uaq"/>`,
		"fallback": "fluent:dual-screen-desktop-20-filled",
	});
}

export default Component;
