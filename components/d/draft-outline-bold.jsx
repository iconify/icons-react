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

.jlfjgzbqx {
  d: path("M9 9h6");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.w0as59itk {
  d: path("M13 3H6v18h8");
}
</style><g class="s0phu2bbs"><path class="w0as59itk"/><path class="jlfjgzbqx"/><path class="aum97lbyp"/></g>`,
		"fallback": "iconmind:draft-outline-bold",
	});
}

export default Component;
