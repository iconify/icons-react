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
		"content": `<style>.nd_l8-t2z {
  d: path("M4.76 16.24a6 6 0 0 1 0 -8.5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.t6ludmxih {
  d: path("M6.88 14.12a3 3 0 0 1 0 -4.24");
}

.zhmw1tbis {
  d: path("M18.69 8.37a4 4 0 1 1 -3.38 0");
}
</style><g class="nrj6p8qat"><path class="t6ludmxih"/><path class="nd_l8-t2z"/><path class="zhmw1tbis"/></g>`,
		"fallback": "iconmind:agent-listen-outline-regular",
	});
}

export default Component;
