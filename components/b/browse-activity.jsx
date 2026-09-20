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
		"content": `<style>.gpjy5hqdd {
  fill: currentColor;
  d: path("M1.77 19.462v-1h20.46v1zm2.846-2q-.691 0-1.153-.463T3 15.846v-4.884h4.683l1.86 3.719q.067.135.189.208t.262.073t.266-.068t.192-.202l3.498-6.201l1.016 2.017q.105.217.307.335t.42.119H21v4.884q0 .69-.462 1.153t-1.153.463zm5.459-3.99l-1.617-3.23q-.067-.134-.192-.207T8 9.962H3V6.077q0-.69.463-1.153t1.152-.462h14.77q.69 0 1.152.462T21 6.077v3.885h-5.183l-1.36-2.72q-.066-.14-.191-.191T14 7t-.26.051t-.186.18z");
}
</style><path class="gpjy5hqdd"/>`,
		"fallback": "material-symbols-light:browse-activity",
	});
}

export default Component;
