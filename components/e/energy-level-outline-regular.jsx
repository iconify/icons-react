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
		"content": `<style>.c7z9o8buo {
  d: path("M7 15h10");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.nzfvycb-k {
  d: path("M7 4h10v17H7Z");
}

.r182r524c {
  d: path("M7 9h10");
}
</style><g class="nrj6p8qat"><path class="nzfvycb-k"/><path class="r182r524c"/><path class="c7z9o8buo"/></g>`,
		"fallback": "iconmind:energy-level-outline-regular",
	});
}

export default Component;
