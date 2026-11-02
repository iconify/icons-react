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
		"content": `<style>.t8u9f286n {
  fill: currentColor;
  d: path("M13 9.414V17a1 1 0 0 1-2 0V9.414l-2.293 2.293a.999.999 0 1 1-1.414-1.414l4-4a.997.997 0 0 1 1.414 0l4 4a.999.999 0 1 1-1.414 1.414Z");
}
</style><path class="t8u9f286n"/>`,
		"fallback": "coolicons:arrow-up-small-fill-round",
	});
}

export default Component;
