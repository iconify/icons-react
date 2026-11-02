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
		"content": `<style>.elvrpibnp {
  fill: currentColor;
  d: path("M9.414 7H17a1 1 0 0 1 1 1v13a1 1 0 0 1-2 0V9H9.414l3.293 3.293a.999.999 0 1 1-1.414 1.414l-5-5a.997.997 0 0 1 0-1.414l5-5a.999.999 0 1 1 1.414 1.414Z");
}
</style><path class="elvrpibnp"/>`,
		"fallback": "coolicons:arrow-turn-up-left-fill-sharp",
	});
}

export default Component;
