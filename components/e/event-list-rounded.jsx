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
		"content": `<style>.ht1wp36va {
  fill: currentColor;
  d: path("M16 21q-.825 0-1.412-.587T14 19v-4q0-.825.588-1.412T16 13h4q.825 0 1.413.588T22 15v4q0 .825-.587 1.413T20 21zM3 18q-.425 0-.712-.288T2 17t.288-.712T3 16h7q.425 0 .713.288T11 17t-.288.713T10 18zm13-7q-.825 0-1.412-.587T14 9V5q0-.825.588-1.412T16 3h4q.825 0 1.413.588T22 5v4q0 .825-.587 1.413T20 11zM3 8q-.425 0-.712-.288T2 7t.288-.712T3 6h7q.425 0 .713.288T11 7t-.288.713T10 8z");
}
</style><path class="ht1wp36va"/>`,
		"fallback": "material-symbols:event-list-rounded",
	});
}

export default Component;
