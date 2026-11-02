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
		"content": `<style>.ykogtzkiq {
  fill: currentColor;
  d: path("M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m8.707-2.293a.999.999 0 1 0-1.414-1.414l-3 3a.997.997 0 0 0 0 1.414l3 3a.999.999 0 1 0 1.414-1.414L8.414 12Zm6 0a.999.999 0 1 0-1.414-1.414l-3 3a1 1 0 0 0 0 1.414l3 3a.999.999 0 1 0 1.414-1.414L14.414 12Z");
}
</style><path class="ykogtzkiq"/>`,
		"fallback": "coolicons:circle-chevron-double-left-fill-round",
	});
}

export default Component;
