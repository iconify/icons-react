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

.enu67qgvs {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M13 3H6v18h8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.jlfjgzbqx {
  d: path("M9 9h6");
}

.jrr2xybsm {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M9 9h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.w0as59itk {
  d: path("M13 3H6v18h8");
}

.ylx8eyb-q {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M9 13h4");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="enu67qgvs"/><path class="jrr2xybsm"/><path class="ylx8eyb-q"/><path class="w0as59itk"/><path class="jlfjgzbqx"/><path class="aum97lbyp"/></g>`,
		"fallback": "iconmind:draft-duotone-regular",
	});
}

export default Component;
