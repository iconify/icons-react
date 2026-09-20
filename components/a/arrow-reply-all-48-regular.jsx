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
		"content": `<style>.h5qr7_krk {
  fill: currentColor;
  d: path("M17.134 8.366a1.25 1.25 0 0 1 0 1.768L7.018 20.25l10.116 10.116a1.25 1.25 0 0 1-1.768 1.768l-11-11a1.25 1.25 0 0 1 0-1.768l11-11a1.25 1.25 0 0 1 1.768 0m8 0a1.25 1.25 0 0 1 0 1.768L16.268 19h8.982C35.605 19 44 27.395 44 37.75a1.25 1.25 0 1 1-2.5 0c0-8.975-7.275-16.25-16.25-16.25h-8.982l8.866 8.866a1.25 1.25 0 0 1-1.768 1.768l-11-11a1.25 1.25 0 0 1 0-1.768l11-11a1.25 1.25 0 0 1 1.768 0");
}
</style><path class="h5qr7_krk"/>`,
		"fallback": "fluent:arrow-reply-all-48-regular",
	});
}

export default Component;
