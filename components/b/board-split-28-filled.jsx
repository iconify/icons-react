import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.s5u-xjblo {
  fill: currentColor;
  d: path("M6.75 3A3.75 3.75 0 0 0 3 6.75V13h13V3zM16 14.5H3v6.75A3.75 3.75 0 0 0 6.75 25H16zM21.25 25H17.5v-7H25v3.25A3.75 3.75 0 0 1 21.25 25M25 16.5h-7.5v-5H25zM17.5 3v7H25V6.75A3.75 3.75 0 0 0 21.25 3z");
}
</style><path class="s5u-xjblo"/>`,
		"fallback": "fluent:board-split-28-filled",
	});
}

export default Component;
