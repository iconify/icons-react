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
		"content": `<style>.uyhae4p4c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 4h18v4H3Zm2 4v12h14V8m-4 6l-3-3l-3 3m3-3v6");
}
</style><path class="uyhae4p4c"/>`,
		"fallback": "coolicons:archive-restore-sharp",
	});
}

export default Component;
