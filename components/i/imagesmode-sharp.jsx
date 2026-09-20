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
		"content": `<style>.pg625ob2u {
  fill: currentColor;
  d: path("M7.5 16.5h9.154l-2.827-3.77l-2.615 3.308l-1.75-2.115zM4 20V4h16v16zM9.207 9.209q.293-.291.293-.707t-.291-.709t-.707-.293t-.709.291t-.293.707t.291.709t.707.293t.709-.291");
}
</style><path class="pg625ob2u"/>`,
		"fallback": "material-symbols-light:imagesmode-sharp",
	});
}

export default Component;
