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
		"content": `<style>.rq0eofyop {
  fill: currentColor;
  d: path("M8 17H4q-.425 0-.712-.288T3 16t.288-.712T4 15h4v-2H4q-.425 0-.712-.288T3 12V8q0-.425.288-.712T4 7h5q.425 0 .713.288T10 8t-.288.713T9 9H5v2h3q.825 0 1.413.588T10 13v2q0 .825-.587 1.413T8 17m6 0q-.825 0-1.412-.587T12 15V9q0-.825.588-1.412T14 7h6q.425 0 .713.288T21 8t-.288.713T20 9h-6v6h5v-2h-1.5q-.425 0-.712-.288T16.5 12t.288-.712T17.5 11H20q.425 0 .713.288T21 12v3q0 .825-.587 1.413T19 17z");
}
</style><path class="rq0eofyop"/>`,
		"fallback": "material-symbols:5g-rounded",
	});
}

export default Component;
