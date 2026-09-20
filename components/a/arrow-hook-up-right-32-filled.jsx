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
		"content": `<style>.qagaw75wy {
  fill: currentColor;
  d: path("M18.866 5.866a1.25 1.25 0 0 1 1.673-.086l.095.086l5 5a1.25 1.25 0 0 1 0 1.768l-5 5a1.25 1.25 0 0 1-1.768-1.768L21.732 13H13.25a4.75 4.75 0 1 0 0 9.5H22a1.25 1.25 0 1 1 0 2.5h-8.75a7.25 7.25 0 1 1 0-14.5h8.482l-2.866-2.866l-.086-.095a1.25 1.25 0 0 1 .086-1.673");
}
</style><path class="qagaw75wy"/>`,
		"fallback": "fluent:arrow-hook-up-right-32-filled",
	});
}

export default Component;
