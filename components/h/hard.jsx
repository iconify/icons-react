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
		"content": `<style>.i8sx_kbfb {
  fill: var(--svg-color--441f67, #441f67);
  d: path("M4.385 3h3.461v6.923h8.308V3h3.462v18h-3.462v-7.615H7.846V21H4.385z");
}
</style><path class="i8sx_kbfb"/>`,
		"fallback": "token-branded:hard",
	});
}

export default Component;
