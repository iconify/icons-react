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
		"content": `<style>.a-qh3tbqw {
  fill: currentColor;
  d: path("M20 11.476V17a5 5 0 0 1-1.464 3.536A5 5 0 0 1 15 22H9a5 5 0 0 1-5-5v-5.524l-.322.286a1 1 0 0 1-1.412-.083l-.013-.015a1 1 0 0 1 .083-1.411l6.342-5.638a5 5 0 0 1 6.644 0l6.342 5.638a1 1 0 0 1 .334.688a1 1 0 0 1-.251.723l-.013.015a1 1 0 0 1-1.412.083ZM13 18a3 3 0 0 0 3-3v-2.435c0-.857-.366-1.673-1.007-2.242l-1-.889a3 3 0 0 0-3.986 0l-1 .889A3 3 0 0 0 8 12.565V15a3 3 0 0 0 3 3Z");
}
</style><path class="a-qh3tbqw"/>`,
		"fallback": "coolicons:house-alt-4-fill-round",
	});
}

export default Component;
