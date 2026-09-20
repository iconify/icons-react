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
		"content": `<style>.la7y55dfn {
  fill: currentColor;
  d: path("M11.288 7.713Q11 7.425 11 7V6h-1q-.425 0-.712-.288T9 5t.288-.712T10 4h1V3q0-.425.288-.712T12 2t.713.288T13 3v1h1q.425 0 .713.288T15 5t-.288.713T14 6h-1v1q0 .425-.288.713T12 8t-.712-.288M5 22q-.825 0-1.412-.587T3 20v-6h18v6q0 .825-.587 1.413T19 22zM3 12V6q0-.825.588-1.412T5 4h1.1q.4 0 .663.3T7 5q0 2.075 1.45 3.538T12 10t3.55-1.463T17 5q0-.4.25-.7t.65-.3H19q.825 0 1.413.588T21 6v6z");
}
</style><path class="la7y55dfn"/>`,
		"fallback": "material-symbols:add-row-above-rounded",
	});
}

export default Component;
