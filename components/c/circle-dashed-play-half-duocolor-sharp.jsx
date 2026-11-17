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
		"content": `<style>.mi1478fcn {
  d: path("M10.592 3.11a9 9 0 1 1 0 17.78M6.71 19.28a9 9 0 0 1-1.991-1.99M3.11 13.407a9 9 0 0 1 0-2.816M4.719 6.71a9 9 0 0 1 1.99-1.991");
}

.n_4gpdb7w {
  stroke-opacity: 0.4;
  d: path("M10 8v8l6-4z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="n_4gpdb7w"/><path class="mi1478fcn"/></g>`,
		"fallback": "coolicons:circle-dashed-play-half-duocolor-sharp",
	});
}

export default Component;
