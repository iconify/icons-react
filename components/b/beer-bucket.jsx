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
		"content": `<style>.aca7i9qme {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 11h18l-1.75 10H4.75Zm2.25 0V8.5L6 6.75V4.5h1v2.25l.75 1.75V11m3 0V8.5l.75-1.75V3h1v3.75l.75 1.75V11m3 0V8.5L17 6.75V4.5h1v2.25l.75 1.75V11");
}
</style><path class="aca7i9qme"/>`,
		"fallback": "uix-sharp:beer-bucket",
	});
}

export default Component;
