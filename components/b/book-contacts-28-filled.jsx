import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.pl5ryebhr {
  fill: currentColor;
  d: path("M5 5.75A3.75 3.75 0 0 1 8.75 2h10.5A3.75 3.75 0 0 1 23 5.75V21a1.5 1.5 0 0 1-1.5 1.5H6.514a2.25 2.25 0 0 0 2.236 2h13.5a.75.75 0 0 1 0 1.5H8.75A3.75 3.75 0 0 1 5 22.25zM16.5 9.5a2.5 2.5 0 1 0-5 0a2.5 2.5 0 0 0 5 0m2 5.375v-.103c0-.979-.794-1.772-1.773-1.772h-5.454c-.98 0-1.773.793-1.773 1.772v.103C9.5 16.437 10.786 18 14 18s4.5-1.569 4.5-3.125");
}
</style><path class="pl5ryebhr"/>`,
		"fallback": "fluent:book-contacts-28-filled",
	});
}

export default Component;
