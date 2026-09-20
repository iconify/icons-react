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
		"content": `<style>.ag27qibsz {
  d: path("m7 15 5 5 5 -5");
}

.i15q6ifrs {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m7 15 5 5 5 -5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.r7xk8o29f {
  d: path("M12 4v16");
}

.uw099db1h {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M12 4v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="uw099db1h"/><path class="i15q6ifrs"/><path class="r7xk8o29f"/><path class="ag27qibsz"/></g>`,
		"fallback": "iconmind:arrow-down-duotone-regular",
	});
}

export default Component;
