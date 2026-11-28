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
		"content": `<style>.av5qzl9vu {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M21 8L19 8L19 22C19 22.5523 18.5523 23 18 23L6 23C5.4477 23 5 22.5523 5 22L5 8L3 8L3 6L21 6ZM15 3L9 3L9 1L15 1ZM13.4142 15L15 13.4142L13.5858 12L12 13.5858L10.4142 12L9 13.4142L10.5858 15L9 16.5858L10.4142 18L12 16.4142L13.5858 18L15 16.5858Z");
}
</style><path clip-rule="evenodd" class="av5qzl9vu"/>`,
		"fallback": "keyline-icons:bin-x-sharp-fill",
	});
}

export default Component;
