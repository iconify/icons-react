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
		"content": `<style>.kne7fxbbu {
  fill: currentColor;
  d: path("M16 16h-5.5V8H18v6a2 2 0 0 1-2 2m2-9V6a2 2 0 0 0-2-2h-5.5v3zM9.5 7V4H4a2 2 0 0 0-2 2v1zM2 8v6a2 2 0 0 0 2 2h5.5V8z");
}
</style><path class="kne7fxbbu"/>`,
		"fallback": "fluent:dual-screen-header-20-filled",
	});
}

export default Component;
