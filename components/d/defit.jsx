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
		"content": `<style>.h6-mjd98m {
  fill: var(--svg-color--037cff, #037cff);
  fill-rule: evenodd;
  d: path("M14.21 7.134h-1.566l.413-1.46h-1.581l-.472 1.46H4.226l1.246 1.767L3 16.866h4.958l-.472 1.46h1.65l.413-1.46h1.616l-.468 1.46h1.645l.418-1.46h3.976a2.2 2.2 0 0 0 2.097-1.547l2.116-6.75a1.104 1.104 0 0 0-1.046-1.435h-4.058l.414-1.46h-1.582l-.472 1.46zm-.014 7.299l1.557-4.866H9.67l-.467 1.46h2.116l-.516 1.46H8.732l-.623 1.946z");
}
</style><path clip-rule="evenodd" class="h6-mjd98m"/>`,
		"fallback": "token-branded:defit",
	});
}

export default Component;
