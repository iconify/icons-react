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
		"content": `<style>.psntx_skw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.002 32.153a3.999 3.999 0 1 1-3.998-4a4 4 0 0 1 3.998 4M24.018 12.43c1.255 0 1.606.324 2.02 1.458l9.517 26.046L42.5 42.25L30.767 10.67C29.6 7.529 27.903 6.014 24 5.749c-3.903.265-5.6 1.78-6.767 4.922L5.5 42.25l6.945-2.316l9.517-26.046c.414-1.134.765-1.458 2.02-1.458");
}
</style><path class="psntx_skw"/>`,
		"fallback": "arcticons:atomic-wallet",
	});
}

export default Component;
