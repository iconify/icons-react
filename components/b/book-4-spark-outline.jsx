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
		"content": `<style>.fsxkb1b2l {
  fill: currentColor;
  d: path("M5 16.175q.25-.075.488-.125T6 16h1V4H6q-.425 0-.712.288T5 5zM6 22q-1.25 0-2.125-.875T3 19V5q0-1.25.875-2.125T6 2h7v2H9v12h6v-3h2v5H6q-.425 0-.712.288T5 19t.288.713T6 20h13v-8h2v10zm-1-5.825V4zM17.5 12q0-2.3 1.6-3.9T23 6.5q-2.3 0-3.9-1.6T17.5 1q0 2.3-1.6 3.9T12 6.5q2.3 0 3.9 1.6t1.6 3.9");
}
</style><path class="fsxkb1b2l"/>`,
		"fallback": "material-symbols:book-4-spark-outline",
	});
}

export default Component;
