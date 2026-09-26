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
		"content": `<style>.to1fr9hry {
  fill: currentColor;
  d: path("M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM15.7071 9.7071C15.8946 9.5196 16 9.2652 16 9C16 8.4477 15.5523 8 15 8C14.7348 8 14.4804 8.1054 14.2929 8.2929L8.2929 14.2929C8.1054 14.4804 8 14.7348 8 15C8 15.5523 8.4477 16 9 16C9.2652 16 9.5196 15.8946 9.7071 15.7071L15.7071 9.7071Z");
}
</style><path class="to1fr9hry"/>`,
		"fallback": "keyline-icons:circle-slash-fill",
	});
}

export default Component;
