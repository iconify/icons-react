import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.g0q50rbeq {
  fill: currentColor;
  d: path("M25 9.5v12.25A3.25 3.25 0 0 1 21.75 25H6.25A3.25 3.25 0 0 1 3 21.75V9.5zM8.741 17.501a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5m5.255 0a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5m-5.255-5a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5m5.255 0a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5m5.254 0a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5M21.75 3A3.25 3.25 0 0 1 25 6.25V8H3V6.25A3.25 3.25 0 0 1 6.25 3z");
}
</style><path class="g0q50rbeq"/>`,
		"fallback": "fluent:calendar-28-filled",
	});
}

export default Component;
