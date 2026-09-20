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
		"content": `<style>.nd-xqjbfz {
  fill: currentColor;
  d: path("M5 9V4.5L6.5 3H11v6H9V5H7v4zm9-1q-.425 0-.712-.288T13 7t.288-.712T14 6t.713.288T15 7t-.288.713T14 8m6 0q-.425 0-.712-.288T19 7t.288-.712T20 6t.713.288T21 7t-.288.713T20 8m-3-2q-.425 0-.712-.288T16 5t.288-.712T17 4t.713.288T18 5t-.288.713T17 6m3-2q-.425 0-.712-.288T19 3t.288-.712T20 2t.713.288T21 3t-.288.713T20 4m-3 6q-.425 0-.712-.288T16 9t.288-.712T17 8t.713.288T18 9t-.288.713T17 10m3 2q-.425 0-.712-.288T19 11t.288-.712T20 10t.713.288T21 11t-.288.713T20 12M5 19h6v-8H5zm-2 2V9h10v12zm2-2h6z");
}
</style><path class="nd-xqjbfz"/>`,
		"fallback": "material-symbols:fragrance-outline-sharp",
	});
}

export default Component;
