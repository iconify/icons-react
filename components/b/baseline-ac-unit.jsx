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
		"content": `<style>.ax1h6dxrq {
  fill: currentColor;
  d: path("M22 11h-4.17l3.24-3.24l-1.41-1.42L15 11h-2V9l4.66-4.66l-1.42-1.41L13 6.17V2h-2v4.17L7.76 2.93L6.34 4.34L11 9v2H9L4.34 6.34L2.93 7.76L6.17 11H2v2h4.17l-3.24 3.24l1.41 1.42L9 13h2v2l-4.66 4.66l1.42 1.41L11 17.83V22h2v-4.17l3.24 3.24l1.42-1.41L13 15v-2h2l4.66 4.66l1.41-1.42L17.83 13H22z");
}
</style><path class="ax1h6dxrq"/>`,
		"fallback": "ic:baseline-ac-unit",
	});
}

export default Component;
