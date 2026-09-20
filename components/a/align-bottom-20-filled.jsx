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
		"content": `<style>.clvargb3v {
  fill: currentColor;
  d: path("M2.5 17a.5.5 0 0 1 0-1h15a.5.5 0 0 1 0 1zM4 13a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2zm7 0a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2z");
}
</style><path class="clvargb3v"/>`,
		"fallback": "fluent:align-bottom-20-filled",
	});
}

export default Component;
