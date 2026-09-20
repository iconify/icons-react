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
		"content": `<style>.ohtxlj07x {
  fill: currentColor;
  d: path("M20.7 17.85L4.85 2H20q.825 0 1.413.588T22 4v12q0 .65-.363 1.138t-.937.712m-.2 5.45L15.15 18H6l-4 4V4.8L.7 3.5l1.4-1.4l19.8 19.8z");
}
</style><path class="ohtxlj07x"/>`,
		"fallback": "material-symbols:chat-bubble-off",
	});
}

export default Component;
