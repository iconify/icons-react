import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.qh9scgbro {
  fill: var(--svg-color--fcc21b, #fcc21b);
  d: path("M115.36 61.84L70.22 50.49L114.45 2.4a1.222 1.222 0 0 0-1.54-1.87L12.3 61.98c-.41.25-.64.72-.57 1.2c.06.48.4.87.87 1.01l45.07 13.25l-44.29 48.16c-.42.46-.44 1.15-.04 1.61c.24.29.58.44.94.44c.22 0 .45-.06.65-.19l100.78-63.41c.42-.26.64-.75.56-1.22c-.08-.49-.43-.88-.91-.99");
}
</style><path class="qh9scgbro"/>`,
		"fallback": "noto-v1:high-voltage",
	});
}

export default Component;
