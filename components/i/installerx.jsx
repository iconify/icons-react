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
		"content": `<style>.gro7n3nox {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M7.435 38.784H23.64l-6.974-7.581zm19.361-.551L5.5 15.043h19.055l10.43 11.57zm.395-24.574l9.468 10.614V9.216h-6.446zm12.003-2.935v4.154H42.5z");
}
</style><path class="gro7n3nox"/>`,
		"fallback": "arcticons:installerx",
	});
}

export default Component;
