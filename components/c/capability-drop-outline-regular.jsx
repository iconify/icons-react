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
		"content": `<style>.b-pphqpeq {
  d: path("M3 8a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.sfnyx4wnk {
  d: path("M6 6v14");
}

.xelgb6ber {
  d: path("M10 12.5h7");
}
</style><g class="nrj6p8qat"><path class="b-pphqpeq"/><path class="sfnyx4wnk"/><path class="xelgb6ber"/></g>`,
		"fallback": "iconmind:capability-drop-outline-regular",
	});
}

export default Component;
