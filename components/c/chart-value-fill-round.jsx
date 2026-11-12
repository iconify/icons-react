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
		"content": `<style>.sqphzi_ey {
  fill: currentColor;
  d: path("M7 4h10a5 5 0 0 1 5 5v6a5 5 0 0 1-1.464 3.536A5 5 0 0 1 17 20H7a5 5 0 0 1-5-5V9a5 5 0 0 1 5-5m-1.707 6.293a.999.999 0 1 0 1.414 1.414L7 11.414V15a1 1 0 0 0 2 0V9a1.002 1.002 0 0 0-1.707-.707ZM19 9a.997.997 0 0 0-1-1h-4a1 1 0 0 0 0 2h1.586l-4.293 4.293a.999.999 0 1 0 1.414 1.414L17 11.414V13a1 1 0 0 0 2 0Z");
}
</style><path class="sqphzi_ey"/>`,
		"fallback": "coolicons:chart-value-fill-round",
	});
}

export default Component;
