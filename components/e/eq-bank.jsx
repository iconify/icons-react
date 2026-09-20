import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.bz4iseewo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.347 29.88h-5.815V18.119h5.815M32.468 29.88l-3.852-3.848m0-7.912zc2.127 0 3.852 1.744 3.852 3.896v3.97c0 2.15-1.725 3.895-3.853 3.895c-2.127 0-3.852-1.744-3.852-3.896v-3.97c0-2.15 1.725-3.895 3.852-3.895");
}

.i40_9dvki {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.49 5.5a4 4 0 0 0-2.828 1.172l-9.99 9.99A4 4 0 0 0 5.5 19.49V38.5a4 4 0 0 0 4 4h19.01a4 4 0 0 0 2.828-1.172l9.99-9.99A4 4 0 0 0 42.5 28.51V9.5a4 4 0 0 0-4-4zM15.532 24h3.794");
}
</style><path class="i40_9dvki"/><path class="bz4iseewo"/>`,
		"fallback": "arcticons:eq-bank",
	});
}

export default Component;
