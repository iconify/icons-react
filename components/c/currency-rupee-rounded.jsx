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
		"content": `<style>.hstax9fnk {
  fill: currentColor;
  d: path("m13.425 20.7l-6.15-6.4q-.125-.125-.2-.312T7 13.6V13q0-.425.288-.712T8 12h2.5q1.325 0 2.288-.862T13.95 9H7q-.425 0-.712-.288T6 8t.288-.712T7 7h6.65q-.425-.875-1.263-1.437T10.5 5H7q-.425 0-.712-.288T6 4t.288-.712T7 3h10q.425 0 .713.288T18 4t-.288.713T17 5h-2.25q.35.425.625.925T15.8 7H17q.425 0 .713.288T18 8t-.288.713T17 9h-1.025q-.2 2.125-1.75 3.563T10.5 14h-.725l5.1 5.3q.45.475.188 1.088T14.15 21q-.2 0-.387-.075t-.338-.225");
}
</style><path class="hstax9fnk"/>`,
		"fallback": "material-symbols:currency-rupee-rounded",
	});
}

export default Component;
