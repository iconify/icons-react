import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.n35vm19oa {
  fill: currentColor;
  d: path("M9.306 2.367q-.713.2-1.38.498L11.78 6.72a.75.75 0 0 1-1.06 1.06L6.552 3.613q-.564.368-1.073.805L9.28 8.22a.75.75 0 0 1-1.06 1.06l-3.802-3.8q-.437.508-.805 1.072L7.78 10.72a.75.75 0 1 1-1.06 1.06L2.865 7.926a10 10 0 0 0-.498 1.38L6.78 13.72a.75.75 0 1 1-1.06 1.06L2.04 11.1a10 10 0 0 0 .008 1.888L6.53 17.47a.75.75 0 1 1-1.06 1.06l-2.717-2.717A10 10 0 0 0 12 22c5.523 0 10-4.477 10-10c0-4.172-2.555-7.748-6.187-9.247L18.53 5.47a.75.75 0 0 1-1.06 1.06l-4.482-4.482A10 10 0 0 0 11.1 2.04l3.68 3.68a.75.75 0 0 1-1.061 1.06z");
}
</style><path class="n35vm19oa"/>`,
		"fallback": "fluent:circle-highlight-24-filled",
	});
}

export default Component;
