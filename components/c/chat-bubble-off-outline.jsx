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
		"content": `<style>.o53jfrbyl {
  fill: currentColor;
  d: path("M20 18V4H6.85l-2-2H20q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18m.5 5.3L15.15 18H6l-4 4V4.8L.7 3.5l1.4-1.4l19.8 19.8zM4 6.8V18l2-2h7.2z");
}
</style><path class="o53jfrbyl"/>`,
		"fallback": "material-symbols:chat-bubble-off-outline",
	});
}

export default Component;
