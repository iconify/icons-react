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
		"content": `<style>.fxj1o6-iu {
  fill: currentColor;
  d: path("M12 16.4L10.4 18q-.275.275-.7.275T9 18t-.275-.7t.275-.7l1.6-1.6L9 13.4q-.275-.275-.275-.7T9 12t.7-.275t.7.275l1.6 1.6l1.6-1.6q.275-.275.7-.275T15 12t.275.7t-.275.7L13.4 15l1.6 1.6q.275.275.275.7T15 18t-.7.275t-.7-.275zM5 22q-.825 0-1.412-.587T3 20V6q0-.825.588-1.412T5 4h1V3q0-.425.288-.712T7 2t.713.288T8 3v1h8V3q0-.425.288-.712T17 2t.713.288T18 3v1h1q.825 0 1.413.588T21 6v14q0 .825-.587 1.413T19 22zm0-2h14V10H5zM5 8h14V6H5zm0 0V6z");
}
</style><path class="fxj1o6-iu"/>`,
		"fallback": "material-symbols:event-busy-outline-rounded",
	});
}

export default Component;
