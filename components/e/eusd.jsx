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
		"content": `<style>.yukfo3bve {
  fill: var(--svg-color--90c31f, #90c31f);
  d: path("M21 6.177H8.554c-.678.015-2.171.624-2.738 2.964c0 .127-.158.868-.37 1.8H3l1.922 2.277l-.297 1.25c-.328 1.116-.344 3.356 2.219 3.356h10.625c.508 0 .958-.329 1.1-.805l.403-1.313h-8.338c-.646 0-1.096-.614-1.096-1.239s.45-1.408 1.096-1.408h7.788c.476 0 .895 0 1.037-.445l.556-1.673h-8.153a1.36 1.36 0 0 1-1.366-1.345a1.323 1.323 0 0 1 1.366-1.302h7.656a1.165 1.165 0 0 0 1.1-.826z");
}
</style><path class="yukfo3bve"/>`,
		"fallback": "token-branded:eusd",
	});
}

export default Component;
