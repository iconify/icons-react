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
		"content": `<style>.o9du5lbwz {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M12 1C18.075 1 23 5.925 23 12C23 18.075 18.075 23 12 23C5.925 23 1 18.075 1 12C1 5.925 5.925 1 12 1ZM10.5 12C9.672 12 9 12.672 9 13.5C9 14.328 9.672 15 10.5 15C11.328 15 12 14.328 12 13.5C12 12.672 11.328 12 10.5 12ZM16.5 9C15.672 9 15 9.672 15 10.5C15 11.328 15.672 12 16.5 12C17.328 12 18 11.328 18 10.5C18 9.672 17.328 9 16.5 9ZM12 6C11.172 6 10.5 6.672 10.5 7.5C10.5 8.328 11.172 9 12 9C12.828 9 13.5 8.328 13.5 7.5C13.5 6.672 12.828 6 12 6Z");
}
</style><path clip-rule="evenodd" class="o9du5lbwz"/>`,
		"fallback": "keyline-icons:bowling-ball-sharp-fill",
	});
}

export default Component;
