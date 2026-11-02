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
		"content": `<style>.fwxn38blb {
  fill: currentColor;
  d: path("M4 7a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v10a5 5 0 0 1-1.464 3.536A5 5 0 0 1 15 22H9a5 5 0 0 1-5-5Zm6-2a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2Zm-1 7a3 3 0 1 0 6 0a3 3 0 0 0-6 0m0 8h6a1 1 0 0 0 1-1c0-.943-.561-1.737-1.324-2.246C13.892 16.232 12.935 16 12 16s-1.892.232-2.676.754C8.561 17.263 8 18.057 8 19a1 1 0 0 0 1 1");
}
</style><path class="fwxn38blb"/>`,
		"fallback": "coolicons:id-badge-fill-round",
	});
}

export default Component;
