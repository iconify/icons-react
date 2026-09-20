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
		"content": `<style>.nykpa49yk {
  fill: currentColor;
  d: path("M14 22q-.825 0-1.412-.587T12 20V4h7q.825 0 1.413.588T21 6v4q0 .825-.587 1.413T19 12h-1v8q0 .825-.587 1.413T16 22zm-5-8q-2.5 0-4.25-1.75T3 8t1.75-4.25T9 2h1v12z");
}
</style><path class="nykpa49yk"/>`,
		"fallback": "material-symbols:earbud-right",
	});
}

export default Component;
