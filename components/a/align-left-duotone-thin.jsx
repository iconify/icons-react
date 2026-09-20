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
		"content": `<style>.cn-9z7b7f {
  d: path("M3 18h15");
}

.cv60iqboi {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 12h11");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.earhjk-cy {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 6h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.grr8qubal {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 18h15");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x22av82oi {
  d: path("M3 12h11");
}

.xgrfb-bqu {
  d: path("M3 6h18");
}
</style><g class="hntgybcog"><path class="earhjk-cy"/><path class="cv60iqboi"/><path class="grr8qubal"/><path class="xgrfb-bqu"/><path class="x22av82oi"/><path class="cn-9z7b7f"/></g>`,
		"fallback": "iconmind:align-left-duotone-thin",
	});
}

export default Component;
