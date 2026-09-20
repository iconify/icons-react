import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.banak16sz {
  fill: currentColor;
  d: path("M5.011 4.394A.5.5 0 0 1 5.5 4h9a.5.5 0 0 1 0 1H7.808l8.899 4.045a.5.5 0 0 1 .03.895l-11 5.923a.5.5 0 1 1-.474-.88l10.112-5.445L5.293 4.955a.5.5 0 0 1-.282-.56M17 4.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0M3.5 17a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1");
}
</style><path class="banak16sz"/>`,
		"fallback": "fluent:gesture-20-regular",
	});
}

export default Component;
