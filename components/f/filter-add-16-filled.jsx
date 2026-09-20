import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.bcp30wbgt {
  fill: currentColor;
  d: path("M8.5 13a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5zM6.257 9a5.5 5.5 0 0 0 1.948 1.5H3.5a.75.75 0 0 1 0-1.5zM10.5 1a4.5 4.5 0 1 1 0 9a4.5 4.5 0 0 1 0-9m0 2a.5.5 0 0 0-.5.5V5H8.5a.5.5 0 0 0 0 1H10v1.5a.5.5 0 0 0 1 0V6h1.5a.5.5 0 0 0 0-1H11V3.5a.5.5 0 0 0-.5-.5M5.022 5a5.6 5.6 0 0 0 .069 1.5H1.5a.75.75 0 0 1 0-1.5z");
}
</style><path class="bcp30wbgt"/>`,
		"fallback": "fluent:filter-add-16-filled",
	});
}

export default Component;
