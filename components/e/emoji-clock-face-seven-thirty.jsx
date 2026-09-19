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
		"content": `<style>.lnjlrdbuv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.04 24.065v15.89m-.011-15.958l-5.397 9.346M2.5 23.997c-.003 11.873 9.62 21.5 21.495 21.503c11.874.003 21.502-9.62 21.505-21.492v-.01C45.5 12.124 35.874 2.5 24 2.5S2.5 12.125 2.5 23.997");
}
</style><path class="lnjlrdbuv"/>`,
		"fallback": "arcticons:emoji-clock-face-seven-thirty",
	});
}

export default Component;
