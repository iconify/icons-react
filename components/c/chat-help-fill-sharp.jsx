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
		"content": `<style>.wu1byfzdv {
  fill: currentColor;
  d: path("m7.414 18l-3.707 3.707A1 1 0 0 1 2 21V3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1ZM9.236 7.832A3 3 0 0 0 9 9a1 1 0 0 0 2 0a1.001 1.001 0 0 1 1.707-.707a1 1 0 0 1 .215 1.094A.99.99 0 0 1 12 10a1 1 0 0 0 0 2a3 3 0 1 0-2.764-4.168M12.01 13H12a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2");
}
</style><path class="wu1byfzdv"/>`,
		"fallback": "coolicons:chat-help-fill-sharp",
	});
}

export default Component;
