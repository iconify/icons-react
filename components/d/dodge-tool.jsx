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
		"content": `<style>.rn25dz4co {
  d: path("M6 8.5a6 6 0 1 0 12 0a6 6 0 1 0-12 0Z");
}

.sy0rbggoo {
  d: path("M10.5 14.25V20a1.5 1.5 0 0 0 3 0v-5.75m-2.021-2.796a3 3 0 0 1-2.433-2.433");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="rn25dz4co"/><path class="sy0rbggoo"/></g>`,
		"fallback": "uix-sharp:dodge-tool",
	});
}

export default Component;
