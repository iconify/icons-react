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
		"content": `<style>.rifce_brd {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M14 1C14.2652 1 14.5196 1.1054 14.7071 1.2929L20.7071 7.2929C20.8946 7.4804 21 7.7348 21 8L21 22C21 22.5523 20.5523 23 20 23L4 23C3.4477 23 3 22.5523 3 22L3 2C3 1.4477 3.4477 1 4 1L14 1ZM13 12L16 12L16 10L13 10L13 7L11 7L11 10L8 10L8 12L11 12L11 15L13 15L13 12ZM8 17L8 19L16 19L16 17L8 17Z");
}
</style><path clip-rule="evenodd" class="rifce_brd"/>`,
		"fallback": "keyline-icons:file-diff-sharp-fill",
	});
}

export default Component;
