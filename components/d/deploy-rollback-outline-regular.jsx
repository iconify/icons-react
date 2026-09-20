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
		"content": `<style>.job8swdnt {
  d: path("M12 13V6H8");
}

.k89aa9bxb {
  d: path("M8 3.5 5.5 6 8 8.5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qm954chvn {
  d: path("M14.5 11H17a3 3 0 0 1 3 3v4a3 3 0 0 1 -3 3H7a3 3 0 0 1 -3 -3v-4a3 3 0 0 1 3 -3h2.5");
}
</style><g class="nrj6p8qat"><path class="qm954chvn"/><path class="job8swdnt"/><path class="k89aa9bxb"/></g>`,
		"fallback": "iconmind:deploy-rollback-outline-regular",
	});
}

export default Component;
