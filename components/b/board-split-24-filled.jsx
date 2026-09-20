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
		"content": `<style>.e4jm6heah {
  fill: currentColor;
  d: path("M6.25 3A3.25 3.25 0 0 0 3 6.25V11h11V3zM3 17.75V12.5h11V21H6.25A3.25 3.25 0 0 1 3 17.75M15.5 16v5h2.25A3.25 3.25 0 0 0 21 17.75V16zm5.5-1.5v-5h-5.5v5zM21 8h-5.5V3h2.25A3.25 3.25 0 0 1 21 6.25z");
}
</style><path class="e4jm6heah"/>`,
		"fallback": "fluent:board-split-24-filled",
	});
}

export default Component;
