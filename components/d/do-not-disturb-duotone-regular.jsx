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
		"content": `<style>.at7ws5bbl {
  d: path("M9.5 12h5");
}

.cthq9btzl {
  fill: currentColor;
  d: path("M7 8h10v13H7Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.d0rd0kbdy {
  fill: currentColor;
  d: path("M9.5 3a2.5 2.5 0 0 1 5 0v2.5a2.5 2.5 0 0 1 -5 0Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.js578gb4i {
  d: path("M9.5 16h5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qmakhcstn {
  d: path("M9.5 3a2.5 2.5 0 0 1 5 0v2.5a2.5 2.5 0 0 1 -5 0Z");
}

.rgjkvwbqj {
  d: path("M7 8h10v13H7Z");
}
</style><g class="nrj6p8qat"><path class="d0rd0kbdy"/><path class="cthq9btzl"/><path class="qmakhcstn"/><path class="rgjkvwbqj"/><path class="at7ws5bbl"/><path class="js578gb4i"/></g>`,
		"fallback": "iconmind:do-not-disturb-duotone-regular",
	});
}

export default Component;
