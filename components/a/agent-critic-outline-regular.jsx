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
		"content": `<style>.ko65glbqt {
  d: path("m13.5 9.5 3 3");
}

.ndu78ys7f {
  d: path("m16.5 9.5 -3 3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qn2tfdboi {
  d: path("m7 12 2 2 3 -3");
}

.ugdbidcqi {
  d: path("M16.23 2.94a10 10 0 1 1 -8.46 0");
}
</style><g class="nrj6p8qat"><path class="ugdbidcqi"/><path class="qn2tfdboi"/><path class="ko65glbqt"/><path class="ndu78ys7f"/></g>`,
		"fallback": "iconmind:agent-critic-outline-regular",
	});
}

export default Component;
