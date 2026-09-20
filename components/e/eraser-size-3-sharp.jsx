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
		"content": `<style>.h6lgqu75d {
  fill: currentColor;
  d: path("M8.5 19q-1.45 0-2.475-1.025T5 15.5q0-.675.263-1.325t.762-1.15l7-7q.5-.5 1.15-.763T15.5 5q1.45 0 2.475 1.025T19 8.5q0 .675-.262 1.325t-.763 1.15l-7 7q-.5.5-1.15.763T8.5 19");
}
</style><path class="h6lgqu75d"/>`,
		"fallback": "material-symbols:eraser-size-3-sharp",
	});
}

export default Component;
