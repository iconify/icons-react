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
		"content": `<style>.h3c9r6bpe {
  fill: currentColor;
  d: path("M5.1 16.05q-.55-.95-.825-1.95T4 12.05q0-3.35 2.325-5.7T12 4h.175l-1.6-1.6l1.4-1.4l4 4l-4 4l-1.4-1.4l1.6-1.6H12Q9.5 6 7.75 7.763T6 12.05q0 .65.15 1.275t.45 1.225zM12.025 23l-4-4l4-4l1.4 1.4l-1.6 1.6H12q2.5 0 4.25-1.763T18 11.95q0-.65-.15-1.275T17.4 9.45l1.5-1.5q.55.95.825 1.95T20 11.95q0 3.35-2.325 5.7T12 20h-.175l1.6 1.6z");
}
</style><path class="h3c9r6bpe"/>`,
		"fallback": "material-symbols:autorenew-outline-sharp",
	});
}

export default Component;
