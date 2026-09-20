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
		"content": `<style>.a249dcbsw {
  d: path("M12 6.5A5.5 5.5 0 1 1 6.5 12");
}

.eqnj_r16z {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M12 6.5A5.5 5.5 0 1 1 6.5 12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.lrge8gh-h {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M12 21a9 9 0 1 1 9 -9");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.m6trofguq {
  d: path("M12 21a9 9 0 1 1 9 -9");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="lrge8gh-h"/><path class="eqnj_r16z"/><path class="m6trofguq"/><path class="a249dcbsw"/></g>`,
		"fallback": "iconmind:activity-ring-duotone-regular",
	});
}

export default Component;
