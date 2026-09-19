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
		"content": `<style>.q22ul9_dr {
  fill: currentColor;
  d: path("M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m1.88 9.54L8.92 16.5l-1.41-1.41l4.96-4.96L10.34 8l5.65.01l.01 5.65z");
}
</style><path class="q22ul9_dr"/>`,
		"fallback": "ic:baseline-outbond",
	});
}

export default Component;
