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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.npmqe87_t {
  d: path("m18 8 -2 2v4l2 2");
}

.oh0y82bky {
  d: path("m20 8 2 2v4l-2 2");
}

.s--3ooryn {
  d: path("M11 12h4");
}

.y76hd_85j {
  d: path("M2 6a2 2 0 0 1 2 -2h5a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}
</style><g class="hntgybcog"><path class="y76hd_85j"/><path class="s--3ooryn"/><path class="npmqe87_t"/><path class="oh0y82bky"/></g>`,
		"fallback": "iconmind:edge-function-outline-thin",
	});
}

export default Component;
