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
		"content": `<style>.cvlyf4b3z {
  d: path("m4 20 5 -5 5 5");
}

.kjs-2gbxx {
  d: path("M9 8v6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ns27x6b-j {
  fill: currentColor;
  d: path("M6 5a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.qdda4miup {
  d: path("M14 20a5 5 0 0 1 7 -7");
}

.xvse_9aut {
  d: path("M6 5a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}
</style><g class="nrj6p8qat"><path class="ns27x6b-j"/><path class="xvse_9aut"/><path class="kjs-2gbxx"/><path class="cvlyf4b3z"/><path class="qdda4miup"/></g>`,
		"fallback": "iconmind:elderly-care-duotone-regular",
	});
}

export default Component;
