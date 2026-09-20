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
		"content": `<style>.hbdbg_bcy {
  d: path("M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v11a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.lyjarcbwz {
  d: path("M7 18v3l3 -3");
}

.m9ofx6bgv {
  d: path("M8 6v9");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.sqmravmye {
  fill: currentColor;
  d: path("M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v11a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.zmudarbqd {
  d: path("M8 6h7l-2 2 2 2H8");
}
</style><g class="nrj6p8qat"><path class="sqmravmye"/><path class="hbdbg_bcy"/><path class="lyjarcbwz"/><path class="m9ofx6bgv"/><path class="zmudarbqd"/></g>`,
		"fallback": "iconmind:flagged-message-duotone-regular",
	});
}

export default Component;
