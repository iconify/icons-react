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
		"content": `<style>.rdwen8iuy {
  fill: currentColor;
  d: path("M13.552 20L7.5 13.692v-1.307h3q1.517 0 2.759-.959t1.268-2.734H6.5v-1h7.92q-.31-1.182-1.388-1.937T10.5 5h-4V4h11v1h-3.942q.715.425 1.24 1.146t.656 1.546H17.5v1h-1.967q-.008 2.125-1.52 3.409q-1.511 1.284-3.513 1.284H8.602L14.942 20z");
}
</style><path class="rdwen8iuy"/>`,
		"fallback": "material-symbols-light:currency-rupee-outline",
	});
}

export default Component;
