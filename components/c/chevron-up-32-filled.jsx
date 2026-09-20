import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.sabkaqbza {
  fill: currentColor;
  d: path("M5.366 20.884a1.25 1.25 0 0 0 1.768 0L16 12.018l8.866 8.866a1.25 1.25 0 0 0 1.768-1.768l-9.75-9.75a1.25 1.25 0 0 0-1.768 0l-9.75 9.75a1.25 1.25 0 0 0 0 1.768");
}
</style><path class="sabkaqbza"/>`,
		"fallback": "fluent:chevron-up-32-filled",
	});
}

export default Component;
