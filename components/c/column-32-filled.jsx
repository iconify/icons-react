import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.d3n4y5bbi {
  fill: currentColor;
  d: path("M5.75 3A3.25 3.25 0 0 1 9 6.25v19.5A3.25 3.25 0 0 1 5.75 29H4a1 1 0 1 1 0-2h1.75C6.44 27 7 26.44 7 25.75V6.25C7 5.56 6.44 5 5.75 5H4a1 1 0 0 1 0-2zm12 0A3.25 3.25 0 0 1 21 6.25v19.5A3.25 3.25 0 0 1 17.75 29h-3.5A3.25 3.25 0 0 1 11 25.75V6.25A3.25 3.25 0 0 1 14.25 3zM28 3a1 1 0 1 1 0 2h-1.75C25.56 5 25 5.56 25 6.25v19.5c0 .69.56 1.25 1.25 1.25H28a1 1 0 1 1 0 2h-1.75A3.25 3.25 0 0 1 23 25.75V6.25A3.25 3.25 0 0 1 26.25 3z");
}
</style><path class="d3n4y5bbi"/>`,
		"fallback": "fluent:column-32-filled",
	});
}

export default Component;
