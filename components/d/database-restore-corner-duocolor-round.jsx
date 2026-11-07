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
		"content": `<style>.m9t7rsb7s {
  d: path("M3 6c0 1.657 2.686 3 6 3s6-1.343 6-3s-2.686-3-6-3s-6 1.343-6 3m0 0v10c0 1.657 2.686 3 6 3m6-13v3M3 11c0 1.657 2.686 3 6 3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.p7cyu9biu {
  stroke-opacity: 0.4;
  d: path("m14 18l3 3l3-3m-3 3v-8");
}
</style><g class="nrj6p8qat"><path class="p7cyu9biu"/><path class="m9t7rsb7s"/></g>`,
		"fallback": "coolicons:database-restore-corner-duocolor-round",
	});
}

export default Component;
