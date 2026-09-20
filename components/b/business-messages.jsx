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
		"content": `<style>.ho306fthi {
  fill: currentColor;
  d: path("M7 20q-.825 0-1.412-.587T5 18V8.75L1 4h19q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm6.5-2.5l1.4-1.4l-1.1-1.1H18v-2H9zM9 11h9l-4.5-4.5l-1.4 1.4L13.2 9H9z");
}
</style><path class="ho306fthi"/>`,
		"fallback": "material-symbols:business-messages",
	});
}

export default Component;
