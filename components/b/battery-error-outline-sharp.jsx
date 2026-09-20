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
		"content": `<style>.ziaho_eqx {
  fill: currentColor;
  d: path("M7 22V4h3V2h4v2h3v8.7q-.55.15-1.05.388t-.95.562V6H9v14h3.7q.125.55.363 1.05t.562.95zm9.4 0L15 20.6l2.1-2.1l-2.1-2.1l1.4-1.4l2.1 2.1l2.1-2.1l1.4 1.4l-2.075 2.1L22 20.6L20.6 22l-2.1-2.075z");
}
</style><path class="ziaho_eqx"/>`,
		"fallback": "material-symbols:battery-error-outline-sharp",
	});
}

export default Component;
