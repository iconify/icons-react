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
		"content": `<style>.aum97lbyp {
  d: path("M9 13h4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jlfjgzbqx {
  d: path("M9 9h6");
}

.w0as59itk {
  d: path("M13 3H6v18h8");
}
</style><g class="hntgybcog"><path class="w0as59itk"/><path class="jlfjgzbqx"/><path class="aum97lbyp"/></g>`,
		"fallback": "iconmind:draft-outline-thin",
	});
}

export default Component;
