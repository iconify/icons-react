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
		"content": `<style>.xf78a_b-m {
  fill: var(--svg-color--4d5357, #4d5357);
  d: path("M56 2L18.8 42.9L8 34.7H2L18.8 62L62 2z");
}
</style><path class="xf78a_b-m"/>`,
		"fallback": "emojione:heavy-check-mark",
	});
}

export default Component;
