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
		"content": `<style>.iuthe4h4z {
  stroke-opacity: 0.4;
  d: path("M12 6c0 2 2 4 4 4c-2 0-4 2-4 4c0-2-2-4-4-4c2 0 4-2 4-4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.szrfpvbqj {
  d: path("M12 3h9v14H7l-4 4V3z");
}
</style><g class="nrj6p8qat"><path class="iuthe4h4z"/><path class="szrfpvbqj"/></g>`,
		"fallback": "coolicons:chat-sparkle-duocolor-sharp",
	});
}

export default Component;
