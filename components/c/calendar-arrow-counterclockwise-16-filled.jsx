import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.udo92hb7b {
  fill: currentColor;
  d: path("M14 6v5.5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5V8.915a1.5 1.5 0 0 0 1.56-.354l1.5-1.5c.294-.293.44-.677.44-1.061zM5.248 8.997a.748.748 0 1 0 0-1.497a.748.748 0 0 0 0 1.497m0 2.5a.748.748 0 1 0 0-1.497a.748.748 0 0 0 0 1.497M8 8.997A.748.748 0 1 0 8 7.5a.748.748 0 0 0 0 1.497m0 2.5A.748.748 0 1 0 8 10a.748.748 0 0 0 0 1.497m2.749-2.5a.748.748 0 1 0 0-1.497a.748.748 0 0 0 0 1.497M5.119 5H14v-.5A2.5 2.5 0 0 0 11.5 2h-7A2.5 2.5 0 0 0 2 4.5v1.793l-.646-.647a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l1.5-1.5a.5.5 0 1 0-.708-.708L3 6.293V4.882A1.5 1.5 0 0 1 5.118 5");
}
</style><path class="udo92hb7b"/>`,
		"fallback": "fluent:calendar-arrow-counterclockwise-16-filled",
	});
}

export default Component;
