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
		"content": `<style>.tgwli83vs {
  fill: currentColor;
  d: path("M8 18V5q0-.825.588-1.412T10 3h4q.825 0 1.413.588T16 5v13zm2-2h4V5h-4zm-2 5v-2h8v2zm2-5h4z");
}
</style><path class="tgwli83vs"/>`,
		"fallback": "material-symbols:general-device-outline",
	});
}

export default Component;
