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
		"content": `<style>.hxcwhwy_p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.326 35.592c.547 2.462 3.693 6.36 4.993 6.908H16.68c1.3-.547 4.515-4.514 4.993-6.908");
}

.wcf28ubvc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M7.79 28.685a8.58 8.58 0 0 0 8.618 8.617A8.64 8.64 0 0 0 24 32.788a8.64 8.64 0 0 0 7.592 4.514a8.58 8.58 0 0 0 8.618-8.617c0-2.052-.684-3.898-1.915-5.403L24 5.5L9.705 23.282c-1.231 1.436-1.915 3.351-1.915 5.403");
}
</style><path class="hxcwhwy_p"/><path class="wcf28ubvc"/>`,
		"fallback": "arcticons:emoji-black-spade-suit",
	});
}

export default Component;
