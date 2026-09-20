import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ifpx4sp5u {
  fill: var(--svg-color--31373d, #31373d);
  d: path("M34.459 1.375a3 3 0 0 0-4.149.884L13.5 28.17l-8.198-7.58a2.999 2.999 0 1 0-4.073 4.405l10.764 9.952s.309.266.452.359a3 3 0 0 0 4.15-.884L35.343 5.524a3 3 0 0 0-.884-4.149");
}
</style><path class="ifpx4sp5u"/>`,
		"fallback": "twemoji:check-mark",
	});
}

export default Component;
