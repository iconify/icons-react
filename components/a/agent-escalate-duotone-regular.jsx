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
		"content": `<style>.c3xkdj8uw {
  d: path("M14.5 5H19v4.5");
}

.inco7s7zj {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M14.5 5H19v4.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.j2aic6ujd {
  d: path("m12 12 7 -7");
}

.lu_2h561k {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M8.69 13.37a4 4 0 1 1 -3.38 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qvqi41cih {
  d: path("M8.69 13.37a4 4 0 1 1 -3.38 0");
}

.x2g3v3b1q {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m12 12 7 -7");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="lu_2h561k"/><path class="x2g3v3b1q"/><path class="inco7s7zj"/><path class="qvqi41cih"/><path class="j2aic6ujd"/><path class="c3xkdj8uw"/></g>`,
		"fallback": "iconmind:agent-escalate-duotone-regular",
	});
}

export default Component;
