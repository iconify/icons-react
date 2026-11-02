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
		"content": `<style>.sloqa5btn {
  fill: currentColor;
  d: path("M12 2h4a1 1 0 0 1 0 2h-3v16h3a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2h3V4H8a1 1 0 0 1 0-2Z");
}
</style><path class="sloqa5btn"/>`,
		"fallback": "coolicons:cursor-text-bulk-sharp",
	});
}

export default Component;
