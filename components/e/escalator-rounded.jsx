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
		"content": `<style>.s1nmnub9i {
  fill: currentColor;
  d: path("M7 18h3.3l5-9H17q.625 0 1.063-.437T18.5 7.5t-.437-1.062T17 6h-3.3l-5 9H7q-.625 0-1.062.438T5.5 16.5t.438 1.063T7 18m-2 3q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21z");
}
</style><path class="s1nmnub9i"/>`,
		"fallback": "material-symbols:escalator-rounded",
	});
}

export default Component;
