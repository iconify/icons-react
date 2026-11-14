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
		"content": `<style>.tuyddya0o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 11V9a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2M3 11h18v6H3Zm2.5 6v2.5m13-2.5v2.5");
}
</style><path class="tuyddya0o"/>`,
		"fallback": "uix-sharp:break-room",
	});
}

export default Component;
