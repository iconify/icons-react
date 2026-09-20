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
		"content": `<style>.eym-wudyd {
  fill: currentColor;
  d: path("M10 6a3.501 3.501 0 1 0 0 7h7.293l-1.147-1.146a.5.5 0 0 1 .708-.708l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L17.293 14H10a4.5 4.5 0 1 1 3.742-2H12.45A3.5 3.5 0 0 0 10 6m-7.5 7h3.257c.314.38.677.716 1.08 1H2.5a.5.5 0 0 1 0-1");
}
</style><path class="eym-wudyd"/>`,
		"fallback": "fluent:arrow-sprint-20-regular",
	});
}

export default Component;
