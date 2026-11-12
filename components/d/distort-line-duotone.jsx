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
		"content": `<style>.fhf-e7enx {
  stroke-linecap: round;
  d: path("M12 12C12 12 6 16 12 22M12 12C12 12 17 17 22 12M12 12C12 12 17 7 12 2M12 12C12 12 8 6 2 12");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.gshkn9qqt {
  d: path("M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z");
}

.jx0p4fbya {
  fill: none;
  stroke: currentColor;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="jx0p4fbya"><path class="fhf-e7enx"/><path class="gshkn9qqt"/></g>`,
		"fallback": "solar:distort-line-duotone",
	});
}

export default Component;
