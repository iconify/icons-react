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
		"content": `<style>.bp7ccradc {
  d: path("M5 12h6");
}

.ghtf55bhy {
  d: path("m19 10 -4 4");
}

.mc77_dknm {
  d: path("m15 10 4 4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.oh4p-ccfe {
  d: path("M2 10a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}
</style><g class="nrj6p8qat"><path class="oh4p-ccfe"/><path class="bp7ccradc"/><path class="mc77_dknm"/><path class="ghtf55bhy"/></g>`,
		"fallback": "iconmind:banner-dismiss-outline-regular",
	});
}

export default Component;
