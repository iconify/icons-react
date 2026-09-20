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
		"content": `<style>.c3psy1b2h {
  fill: var(--svg-color--c9b4f9, #c9b4f9);
  d: path("M14.724 12h3.486L21 16.8v3H10.362C6.294 19.8 3 16.434 3 12.276v-.552C3 7.56 6.3 4.2 10.362 4.2h4.47l1.728 3h-5.838a4.74 4.74 0 0 0-4.68 4.788c0 2.64 2.094 4.812 4.68 4.812h6.792zM11.4 9.9a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m0 4.2a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0");
}
</style><path class="c3psy1b2h"/>`,
		"fallback": "token-branded:gho",
	});
}

export default Component;
