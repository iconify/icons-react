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
		"content": `<style>.dpznszjnk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m14.332 40.595l19.152-33.35H14.388l18.834 33.422");
}

.x4n9libbh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m4.5 23.835l10.06 16.92h18.696L43.5 23.847");
}
</style><path class="x4n9libbh"/><path class="dpznszjnk"/>`,
		"fallback": "arcticons:hail",
	});
}

export default Component;
