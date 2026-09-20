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

.etuphyhyp {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M13 3H6v18h8");
  opacity: var(--svg-opacity--0-2, 0.2);
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

.o0lh1k1dl {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M9 9h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.w0as59itk {
  d: path("M13 3H6v18h8");
}

.z1t2-_6ze {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M9 13h4");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="etuphyhyp"/><path class="o0lh1k1dl"/><path class="z1t2-_6ze"/><path class="w0as59itk"/><path class="jlfjgzbqx"/><path class="aum97lbyp"/></g>`,
		"fallback": "iconmind:draft-duotone-thin",
	});
}

export default Component;
