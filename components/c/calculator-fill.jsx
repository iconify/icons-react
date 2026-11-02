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
		"content": `<style>.kdfn5bbjx {
  fill: currentColor;
  d: path("M6 2h12a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3m2 5a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2Zm.01 4H8a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2m4 0H12a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2M17 16v-4a1 1 0 0 0-2 0v4a1 1 0 0 0 2 0m-9-1a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2Zm4.01 0H12a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2");
}
</style><path class="kdfn5bbjx"/>`,
		"fallback": "coolicons:calculator-fill",
	});
}

export default Component;
