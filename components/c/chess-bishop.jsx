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
		"content": `<style>.sg5-dwb2t {
  fill: currentColor;
  d: path("M4 22v-5q1.375-.95 2.488-2.2T8.25 12H6v-2h1.8l-1-1.65q-.35-.575-.275-1.263T7.1 5.9L12 1l4.9 4.9q.5.5.575 1.188T17.2 8.35l-1 1.65H18v2h-2.25q.65 1.55 1.763 2.8T20 17v5zm8.713-14.288Q13 7.425 13 7t-.288-.712T12 6t-.712.288T11 7t.288.713T12 8t.713-.288");
}
</style><path class="sg5-dwb2t"/>`,
		"fallback": "material-symbols:chess-bishop",
	});
}

export default Component;
