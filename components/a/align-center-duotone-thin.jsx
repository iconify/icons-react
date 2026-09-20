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
		"content": `<style>.earhjk-cy {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 6h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.gl3_cfeeg {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M6.5 12h11");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ite_ehtoh {
  d: path("M4.5 18h15");
}

.la945tbvd {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4.5 18h15");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.qt4afwy9g {
  d: path("M6.5 12h11");
}

.xgrfb-bqu {
  d: path("M3 6h18");
}
</style><g class="hntgybcog"><path class="earhjk-cy"/><path class="gl3_cfeeg"/><path class="la945tbvd"/><path class="xgrfb-bqu"/><path class="qt4afwy9g"/><path class="ite_ehtoh"/></g>`,
		"fallback": "iconmind:align-center-duotone-thin",
	});
}

export default Component;
