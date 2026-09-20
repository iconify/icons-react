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
		"content": `<style>.vwaupeq9b {
  fill: currentColor;
  d: path("M9 1v3.5A1.5 1.5 0 0 0 10.5 6H14v7.5a1.5 1.5 0 0 1-1.5 1.5H8.663A5.5 5.5 0 0 0 4 5.207V2.5A1.5 1.5 0 0 1 5.5 1zm1 .25V4.5a.5.5 0 0 0 .5.5h3.25zm0 9.25a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-4-2a.5.5 0 0 0-1 0V10H3.5a.5.5 0 0 0 0 1H5v1.5a.5.5 0 0 0 1 0V11h1.5a.5.5 0 0 0 0-1H6z");
}
</style><path class="vwaupeq9b"/>`,
		"fallback": "fluent:document-add-16-filled",
	});
}

export default Component;
