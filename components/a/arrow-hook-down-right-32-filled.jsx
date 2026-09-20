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
		"content": `<style>.nd-jhuj5y {
  fill: currentColor;
  d: path("M22 7a1.25 1.25 0 1 1 0 2.5h-8.75a4.75 4.75 0 1 0 0 9.5h8.482l-2.866-2.866a1.25 1.25 0 0 1 1.768-1.768l5 5a1.25 1.25 0 0 1 0 1.768l-5 5l-.095.086a1.25 1.25 0 0 1-1.759-1.76l.086-.094l2.866-2.866H13.25a7.25 7.25 0 1 1 0-14.5z");
}
</style><path class="nd-jhuj5y"/>`,
		"fallback": "fluent:arrow-hook-down-right-32-filled",
	});
}

export default Component;
