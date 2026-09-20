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
		"content": `<style>.tznal2-5d {
  d: path("m6.142 21l8.221-14.227l.99 3.683L9.267 21h3.116l3.953-6.844L18.181 21h2.792l-2.729-10.166L20.18 7.2h-2.836L16.137 3h-2.72L3.028 21z");
}
</style><path class="tznal2-5d"/>`,
		"fallback": "token-branded:algorand",
	});
}

export default Component;
