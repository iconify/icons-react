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
		"content": `<style>.ylp-gfbez {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.608 26.36c0 2.666-2.168 4.827-4.844 4.828h0c-2.676 0-4.845-2.161-4.845-4.827s2.17-4.827 4.845-4.827s4.844 2.162 4.844 4.827m-4.844-12.375c6.86 0 12.42 5.54 12.42 12.375h0c0 6.834-5.56 12.375-12.42 12.375c-1.667 0-3.318-.335-4.85-.992l.004 5.756h-7.102V25.6c0-7.102 6.838-11.614 11.948-11.614M11.816 4.5h7.102v7.076h-7.102z");
}
</style><path class="ylp-gfbez"/>`,
		"fallback": "arcticons:banco-pan",
	});
}

export default Component;
