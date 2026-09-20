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
		"content": `<style>.diifl-btd {
  fill: currentColor;
  d: path("M9.904 17.308L4.596 12l5.308-5.308l.708.72L6.523 11.5h12.88v1H6.524l4.089 4.089z");
}
</style><path class="diifl-btd"/>`,
		"fallback": "material-symbols-light:arrow-left-alt-outline-sharp",
	});
}

export default Component;
