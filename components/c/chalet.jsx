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
		"content": `<style>.aouxooe1u {
  fill: currentColor;
  d: path("M17.5 11V9.8l-.75.75l-.7-.7L17.5 8.4v-.9h-.9l-1.45 1.45l-.7-.7l.75-.75H14v-1h1.2l-.75-.75l.7-.725l1.45 1.45h.9V5.6l-1.45-1.45l.7-.7l.75.75V3h1v1.2l.75-.75l.7.7L18.5 5.6v.9h.9l1.45-1.45l.7.7l-.75.75H22v1h-1.2l.75.75l-.7.7L19.4 7.5h-.9v.9l1.45 1.45l-.7.7l-.75-.75V11zM5 20v-4.7l-1.1 1.1L2.5 15L10 7.5l7.5 7.5l-1.4 1.425l-1.1-1.1V20h-4v-5H9v5z");
}
</style><path class="aouxooe1u"/>`,
		"fallback": "material-symbols:chalet",
	});
}

export default Component;
