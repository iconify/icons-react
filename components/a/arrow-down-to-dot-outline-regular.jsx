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
		"content": `<style>.ilxguy6uu {
  d: path("M12 4v10");
}

.k7llgzrde {
  d: path("M10 18.5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.q3jyfybar {
  d: path("m8 10 4 4 4 -4");
}
</style><g class="nrj6p8qat"><path class="ilxguy6uu"/><path class="q3jyfybar"/><path class="k7llgzrde"/></g>`,
		"fallback": "iconmind:arrow-down-to-dot-outline-regular",
	});
}

export default Component;
