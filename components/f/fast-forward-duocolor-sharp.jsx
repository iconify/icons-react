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
		"content": `<style>.lw3rgxbeh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m3 7l9 5l-9 5Zm9 0l9 5l-9 5Z");
}
</style><path class="lw3rgxbeh"/>`,
		"fallback": "coolicons:fast-forward-duocolor-sharp",
	});
}

export default Component;
