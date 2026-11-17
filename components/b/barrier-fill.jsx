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
		"content": `<style>.bvay9zbri {
  fill: currentColor;
  d: path("M3.707 6.293L3.414 6h3.172l.291.292l.002.001L14.586 14h-3.172l-.291-.292l-.002-.001Zm12 0L15.414 6H20a2 2 0 0 1 2 2v4.586ZM9.414 6h3.172l8 8H20v3h1a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2h1v-3h-.586l-.291-.291l-.002-.002Zm-1.121 7.707l.293.293H6v3h1a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2h1v-3a2 2 0 0 1-2-2V7.414Z");
}
</style><path class="bvay9zbri"/>`,
		"fallback": "coolicons:barrier-fill",
	});
}

export default Component;
