import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.by8bd3hcb {
  fill: currentColor;
  d: path("M213.66 194.34a8 8 0 0 1-11.32 11.32L184 187.31l-18.34 18.35a8 8 0 0 1-11.32-11.32L172.69 176l-18.35-18.34a8 8 0 0 1 11.32-11.32L184 164.69l18.34-18.35a8 8 0 0 1 11.32 11.32L195.31 176Zm-56.25-74.24a32 32 0 0 1 23.92 8.05a4 4 0 0 0 5.34 0a31.88 31.88 0 0 1 17.77-8a4 4 0 0 0 3.56-4V40.46a16.41 16.41 0 0 0-9.18-14.93a16 16 0 0 0-18.14 3.16l-160 160a16 16 0 0 0-3.17 18.13A16.4 16.4 0 0 0 32.46 216h93.6a4 4 0 0 0 3.78-5.3a32 32 0 0 1 6.31-32a4 4 0 0 0 0-5.34a32 32 0 0 1 21.26-53.23Z");
}
</style><path class="by8bd3hcb"/>`,
		"fallback": "ph:cell-signal-x-fill",
	});
}

export default Component;
