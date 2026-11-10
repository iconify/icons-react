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
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.k6clmjp8b {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  fill-rule: evenodd;
  d: path("M12 1C14.17 1 15.939 2.845 16 5H20C20.552 5 21 5.448 21 6V22C21 22.552 20.552 23 20 23H4C3.448 23 3 22.552 3 22V6C3 5.448 3.448 5 4 5H8C8.061 2.845 9.83 1 12 1ZM12 3C10.938 3 10.064 3.955 9.998 5H14.002C13.936 3.955 13.062 3 12 3Z");
}

.snz5q4blf {
  d: path("M21 14V16H9V19H7V16H3V14H21ZM15 9V11H9V9H15Z");
}
</style><g class="cuyn6tgcc"><path clip-rule="evenodd" class="k6clmjp8b"/><path class="snz5q4blf"/></g>`,
		"fallback": "keyline-icons:backpack-sharp-duotone",
	});
}

export default Component;
