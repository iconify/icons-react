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
		"content": `<style>.apwl3eu4z {
  d: path("M22 1C22.552 1 23 1.448 23 2V22C23 22.552 22.552 23 22 23C21.448 23 21 22.552 21 22V2C21 1.448 21.448 1 22 1ZM16 13C17.6569 13 19 14.343 19 16V18C19 19.657 17.6569 21 16 21H4C2.3432 21 1 19.657 1 18V16C1 14.343 2.3432 13 4 13H16Z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.wn4wiybrg {
  d: path("M16 3C17.6569 3 19 4.343 19 6V8C19 9.657 17.6569 11 16 11H12C10.3431 11 9 9.657 9 8V6C9 4.343 10.3431 3 12 3H16Z");
}
</style><g class="cuyn6tgcc"><path class="apwl3eu4z"/><path class="wn4wiybrg"/></g>`,
		"fallback": "keyline-icons:align-end-vertical-fill",
	});
}

export default Component;
