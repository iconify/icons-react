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
		"content": `<style>.k390s-ksh {
  fill: currentColor;
  d: path("M25 21.75A3.25 3.25 0 0 1 21.75 25H6.25A3.25 3.25 0 0 1 3 21.75V9.5h22zm-5.97-8.53a.75.75 0 0 0-1.06 0l-5.47 5.47l-2.47-2.47l-.056-.052A.75.75 0 0 0 8.97 17.28l3 3a.75.75 0 0 0 1.06 0l6-6a.75.75 0 0 0 0-1.06M21.75 3A3.25 3.25 0 0 1 25 6.25V8H3V6.25A3.25 3.25 0 0 1 6.25 3z");
}
</style><path class="k390s-ksh"/>`,
		"fallback": "fluent:calendar-checkmark-center-28-filled",
	});
}

export default Component;
