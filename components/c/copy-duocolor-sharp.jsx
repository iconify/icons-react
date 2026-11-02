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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.y0fgq8blw {
  d: path("M3 7h14v14H3Z");
}

.znvli555c {
  stroke-opacity: 0.4;
  d: path("M7 3h14v14");
}
</style><g class="nrj6p8qat"><path class="znvli555c"/><path class="y0fgq8blw"/></g>`,
		"fallback": "coolicons:copy-duocolor-sharp",
	});
}

export default Component;
