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
		"content": `<style>.bn3r2_bye {
  fill: currentColor;
  d: path("m6 21l6-6l6 6zm-2-2q-.825 0-1.412-.587T2 17V5q0-.825.588-1.412T4 3h16q.825 0 1.413.588T22 5v12q0 .825-.587 1.413T20 19h-1l-7-7l-7 7z");
}
</style><path class="bn3r2_bye"/>`,
		"fallback": "material-symbols:airplay",
	});
}

export default Component;
