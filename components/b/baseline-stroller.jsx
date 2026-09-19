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
		"content": `<style>.ki4grwbqx {
  cx: 6px;
  cy: 20px;
  r: 2px;
  fill: currentColor;
}

.nxc9lccad {
  fill: currentColor;
  d: path("M22 7v-.52C22 4.56 20.52 3 18.65 3c-1.66 0-2.54 1.27-3.18 2.03l-8.8 10.32C6.12 16 6.58 17 7.43 17H15c1.1 0 2-.9 2-2V6.27c.58-.68.97-1.27 1.65-1.27c.77 0 1.35.66 1.35 1.48V7zm-7.7-2.9a8.96 8.96 0 0 0-9.58.62l4.89 4.89z");
}

.oy4or8b1j {
  cx: 16px;
  cy: 20px;
  r: 2px;
  fill: currentColor;
}
</style><circle class="oy4or8b1j"/><circle class="ki4grwbqx"/><path class="nxc9lccad"/>`,
		"fallback": "ic:baseline-stroller",
	});
}

export default Component;
