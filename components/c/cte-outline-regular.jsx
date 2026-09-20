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
		"content": `<style>.buvqhc29l {
  d: path("M2 15a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.fxnzc9b-v {
  d: path("M12 9v4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.v74fm-flr {
  d: path("M5 4a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2H7a2 2 0 0 1 -2 -2Z");
}
</style><g class="nrj6p8qat"><path class="v74fm-flr"/><path class="fxnzc9b-v"/><path class="buvqhc29l"/></g>`,
		"fallback": "iconmind:cte-outline-regular",
	});
}

export default Component;
