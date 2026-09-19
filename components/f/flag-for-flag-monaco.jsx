import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.o1obzrb0p {
  fill: var(--svg-color--c94747, #c94747);
  d: path("M32 2C15.4 2 2 15.4 2 32h60C62 15.4 48.6 2 32 2");
}

.zmi9d3j7m {
  fill: var(--svg-color--f9f9f9, #f9f9f9);
  d: path("M32 62c16.6 0 30-13.4 30-30H2c0 16.6 13.4 30 30 30");
}
</style><path class="zmi9d3j7m"/><path class="o1obzrb0p"/>`,
		"fallback": "emojione:flag-for-flag-monaco",
	});
}

export default Component;
