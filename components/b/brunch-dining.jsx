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
		"content": `<style>.wsr12gblx {
  fill: currentColor;
  d: path("M2.5 22q-.225 0-.363-.137T2 21.5V20h14v1.5q0 .225-.137.363T15.5 22zM2 18v-1.5q0-.225.138-.363T2.5 16H7v-2h4v2h4.5q.225 0 .363.138T16 16.5V18zm16 4v-6.1q-.9-1.025-1.45-2.025T16 11.45V2h6v9.45q0 1.425-.537 2.438T20 15.9V20h2v2zm0-14h2V4h-2z");
}
</style><path class="wsr12gblx"/>`,
		"fallback": "material-symbols:brunch-dining",
	});
}

export default Component;
