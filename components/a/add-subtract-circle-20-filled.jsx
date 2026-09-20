import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.vgu_sy6od {
  fill: currentColor;
  d: path("M11.5 12a.5.5 0 1 0 0 1h3a.5.5 0 0 0 0-1zM10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0-1a6.97 6.97 0 0 1-4.584-1.71l9.875-9.874A7 7 0 0 1 10 17M5.5 7a.5.5 0 0 1 .5-.5h1v-1a.5.5 0 0 1 1 0v1h1a.5.5 0 1 1 0 1H8v1a.5.5 0 0 1-1 0v-1H6a.5.5 0 0 1-.5-.5");
}
</style><path class="vgu_sy6od"/>`,
		"fallback": "fluent:add-subtract-circle-20-filled",
	});
}

export default Component;
