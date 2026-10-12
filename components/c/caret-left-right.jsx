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
		"content": `<style>.b31qs6a4o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4.18 11.24l5.14-4.23q.93-.76.93.44v9.1q0 1.2-.93.44l-5.14-4.23q-.93-.76 0-1.52m15.64 0l-5.14-4.23q-.93-.76-.93.44v9.1q0 1.2.93.44l5.14-4.23q.93-.76 0-1.52");
}
</style><path class="b31qs6a4o"/>`,
		"fallback": "iconoven:caret-left-right",
	});
}

export default Component;
