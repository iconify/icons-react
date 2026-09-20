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
		"content": `<style>.qh9mm-bae {
  fill: currentColor;
  d: path("M7.438 20.563Q7 20.125 7 19.5V13H3q-.425 0-.712-.288T2 12t.288-.712T3 11h4V4.5q0-.625.438-1.062T8.5 3t1.063.438T10 4.5V11h4V7.5q0-.625.438-1.062T15.5 6t1.063.438T17 7.5V11h4q.425 0 .713.288T22 12t-.288.713T21 13h-4v3.5q0 .625-.437 1.063T15.5 18t-1.062-.437T14 16.5V13h-4v6.5q0 .625-.437 1.063T8.5 21t-1.062-.437");
}
</style><path class="qh9mm-bae"/>`,
		"fallback": "material-symbols:align-vertical-center-outline-rounded",
	});
}

export default Component;
