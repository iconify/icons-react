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
		"content": `<style>.gp51dacwl {
  fill: currentColor;
  d: path("M6.614 3.143a.75.75 0 1 1 .772-1.286c1.347.808 2.34 1.785 2.98 3.135c.63 1.33.884 2.955.884 5.008v5.44l2.72-2.72a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 1.06-1.06l2.72 2.72V10c0-1.947-.245-3.321-.74-4.366c-.486-1.026-1.243-1.799-2.396-2.49");
}
</style><path class="gp51dacwl"/>`,
		"fallback": "fluent:arrow-curve-down-right-20-filled",
	});
}

export default Component;
