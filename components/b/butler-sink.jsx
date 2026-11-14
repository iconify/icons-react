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
		"content": `<style>.zrpd-vbgt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 11h18v10H3Zm0 3h18M7.5 11V7.5h9V11M12 7.5v-3a2 2 0 0 1 4 0");
}
</style><path class="zrpd-vbgt"/>`,
		"fallback": "uix-sharp:butler-sink",
	});
}

export default Component;
