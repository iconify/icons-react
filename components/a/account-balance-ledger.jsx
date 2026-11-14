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
		"content": `<style>.rip0qtbtc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 3.5h10.5M13 7h7.5M8 10.5h12.5m-9 3.5h9M4.25 14h2.5M5.5 12.75v2.5M3.5 18h17m-17 3h17");
}
</style><path class="rip0qtbtc"/>`,
		"fallback": "uix-sharp:account-balance-ledger",
	});
}

export default Component;
