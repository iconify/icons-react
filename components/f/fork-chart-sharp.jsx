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
		"content": `<style>.iurhbwz0o {
  fill: currentColor;
  d: path("M3 20v-7.75q-.65-.175-1.075-.712T1.5 10.3V5h1v4h.75V5h1v4H5V5h1v5.3q0 .7-.425 1.238T4.5 12.25V20zM21.325 7.1q.8 1.025 1.238 2.263T23 12t-.45 2.638T21.3 16.9L16.4 12zM16 4.075q1.1.125 2.088.538T19.9 5.675L16 9.6zM15 20q-3.35 0-5.675-2.325T7 12q0-3.075 2.012-5.325T14 4.05v8.375l5.875 5.9q-1.025.8-2.262 1.238T15 20");
}
</style><path class="iurhbwz0o"/>`,
		"fallback": "material-symbols:fork-chart-sharp",
	});
}

export default Component;
