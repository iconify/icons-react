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
		"content": `<style>.lt1qxne8j {
  stroke-opacity: 0.4;
  d: path("m4 9l16-4m-8 2v6m-2-9h.01M14 3h.01");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.w7kvw9-1r {
  d: path("M4 13h16v8H4zm0 4h16M9 13v4m6-4v4");
}
</style><g class="nrj6p8qat"><path class="lt1qxne8j"/><path class="w7kvw9-1r"/></g>`,
		"fallback": "coolicons:cable-car-alt-duocolor-sharp",
	});
}

export default Component;
