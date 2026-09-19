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
		"content": `<style>.i51_9svfa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.12 18.75L7.47 24L24 33l16.53-9l-9.65-5.25");
}

.qd0lnac7g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.12 29.25L7.47 34.5l16.53 9l16.53-9l-9.65-5.25");
}

.ut1x1tbyw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M40.53 13.5L24 4.5l-16.53 9L24 22.49z");
}
</style><path class="ut1x1tbyw"/><path class="i51_9svfa"/><path class="qd0lnac7g"/>`,
		"fallback": "arcticons:buffer",
	});
}

export default Component;
