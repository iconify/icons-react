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
		"content": `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.hfoauq73b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M40.6 37.7c-6.2-6.6-14.4-14.5-20.6-21c-1.1-1.1-1.6-2.5-1.6-4c.1-2.4 2-4.7 4.4-5c2.5-.4 4.7.8 5.8 3.2c4 8.4 9 17 13 25.4m-26.3-9.4c-1.5-.6-2.4-2-2.3-3.5s1.2-2.9 2.8-3.2c0 0 .4-.1.6-.1c.8 0 1.6.3 2.2.8l15.6 12.9zm-3.8 6.5c-1.2.1-2.3-.8-2.4-2c-.2-1.3.6-2.4 1.9-2.6c.4-.1.9 0 1.3.1c4 .9 8.8 2.3 12.7 3.2zm-5.1 3l9.1-1.8L8.6 39");
}
</style><circle class="cpk0fnbgt"/><path class="hfoauq73b"/>`,
		"fallback": "arcticons:avast-mobile-security",
	});
}

export default Component;
