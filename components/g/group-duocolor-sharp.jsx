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
		"content": `<style>.lkt9pecra {
  stroke-opacity: 0.4;
  d: path("M3 6V3h3m12 0h3v3m0 12v3h-3M6 21H3v-3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.x9herjs3p {
  d: path("M7 7h7v5H7zm3 5h7v5h-7z");
}
</style><g class="nrj6p8qat"><path class="lkt9pecra"/><path class="x9herjs3p"/></g>`,
		"fallback": "coolicons:group-duocolor-sharp",
	});
}

export default Component;
