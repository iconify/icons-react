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
		"content": `<style>.ma0ndib4h {
  fill: currentColor;
  d: path("M9 14H4q-.425 0-.712-.288T3 13t.288-.712T4 12h5q.425 0 .713.288T10 13t-.288.713T9 14m6.75-5.95l-1.425 1.025q-.35.275-.788.188T12.85 8.8q-.225-.35-.15-.763t.425-.662L16.2 5.15q.1-.075.213-.112T16.65 5h.55q.35 0 .575.225T18 5.8v12.075q0 .475-.325.8t-.8.325t-.8-.325t-.325-.8z");
}
</style><path class="ma0ndib4h"/>`,
		"fallback": "material-symbols:exposure-neg-1-rounded",
	});
}

export default Component;
