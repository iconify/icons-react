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
		"content": `<style>.mcwyqyblv {
  fill: currentColor;
  d: path("M3.28 2.22a.75.75 0 1 0-1.06 1.06l4.497 4.497a1.5 1.5 0 1 0 1.76 1.76l3.239 3.24a1.5 1.5 0 1 0 1.757 1.757l7.246 7.246a.75.75 0 0 0 1.061-1.06zm15.216 12.03c0 .303-.09.585-.244.82l-2.076-2.076a1.5 1.5 0 0 1 2.32 1.256m-4.996-5c0 .304-.09.586-.245.823l-2.078-2.078A1.5 1.5 0 0 1 13.5 9.25m-4.996-5c0 .305-.09.588-.247.825L6.179 2.997A1.5 1.5 0 0 1 8.504 4.25M12 17.75a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m-4.996-5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m9.992-5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3M12 2.75a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m4.996 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3");
}
</style><path class="mcwyqyblv"/>`,
		"fallback": "fluent:dialpad-off-24-filled",
	});
}

export default Component;
