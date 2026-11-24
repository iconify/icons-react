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
		"content": `<style>.bajvsobfn {
  d: path("M17 13H7l-2-3c-.855-1.282-.855-3 0-3h14c.855 0 .855 1.718 0 3zm-8 0v8m6-8v8M3 21h18M12 7V3");
}

.g2g42pj9c {
  stroke-opacity: 0.4;
  d: path("m8 7l2 6m6-6l-2 6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="g2g42pj9c"/><path class="bajvsobfn"/></g>`,
		"fallback": "coolicons:control-tower-duocolor-round",
	});
}

export default Component;
