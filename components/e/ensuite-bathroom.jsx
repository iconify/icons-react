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
		"content": `<style>.hvlexebjz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 5.5v15M3 17h8.4M3 12.5h10.7m6.633.8q.159.172.284.37q.125.199.21.417q.086.218.129.448q.044.231.044.465v.173M5.5 9.5h5v3h-5Zm8.75 8.5h7.5v1.5a2 2 0 0 1-2 2h-3.5a2 2 0 0 1-2-2Zm1.25 0v-2.5a1.25 1.25 0 0 1 2.5 0");
}
</style><path class="hvlexebjz"/>`,
		"fallback": "uix-sharp:ensuite-bathroom",
	});
}

export default Component;
