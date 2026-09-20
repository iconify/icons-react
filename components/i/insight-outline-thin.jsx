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

.kk7jzcbcv {
  d: path("M10 19h4");
}

.o-4bk_b4n {
  d: path("M7 8a5 5 0 1 0 10 0A5 5 0 1 0 7 8");
}

.zm2dyvb-o {
  d: path("M9 16h6");
}
</style><g class="hntgybcog"><path class="o-4bk_b4n"/><path class="zm2dyvb-o"/><path class="kk7jzcbcv"/></g>`,
		"fallback": "iconmind:insight-outline-thin",
	});
}

export default Component;
