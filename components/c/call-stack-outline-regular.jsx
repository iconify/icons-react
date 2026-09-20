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
		"content": `<style>.k_7o4ab9h {
  d: path("M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2 2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2");
}

.kywk80fso {
  d: path("M3 19a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2 2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2");
}

.mdkrhrb3l {
  d: path("M3 12a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2 2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="k_7o4ab9h"/><path class="mdkrhrb3l"/><path class="kywk80fso"/></g>`,
		"fallback": "iconmind:call-stack-outline-regular",
	});
}

export default Component;
