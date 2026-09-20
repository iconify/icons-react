import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.xln-2ebqz {
  fill: currentColor;
  d: path("m35.232 37l6.634 6.634a1.25 1.25 0 0 0 1.768-1.768l-37.5-37.5a1.25 1.25 0 1 0-1.768 1.768l9.105 9.105A11.9 11.9 0 0 0 12.04 20h-.54a8.5 8.5 0 0 0 0 17zM45 28.5a8.5 8.5 0 0 1-4.436 7.468L16.35 11.754A11.95 11.95 0 0 1 24 9c6.29 0 11.45 4.84 11.959 11h.541a8.5 8.5 0 0 1 8.5 8.5");
}
</style><path class="xln-2ebqz"/>`,
		"fallback": "fluent:cloud-off-48-filled",
	});
}

export default Component;
