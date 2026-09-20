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
		"content": `<style>.h3piw-bad {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M18 5v4.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j-bg0m85s {
  d: path("M12 14.5V19");
}

.p24r95ukg {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M6 5v4.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.px1u_4qiq {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M2 12h20");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.sc-gdybyv {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M12 14.5V19");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.th8j40bfn {
  d: path("M18 5v4.5");
}

.ugztwkaee {
  d: path("M6 5v4.5");
}

.x26a8iq1c {
  d: path("M2 12h20");
}
</style><g class="hntgybcog"><path class="px1u_4qiq"/><path class="p24r95ukg"/><path class="sc-gdybyv"/><path class="h3piw-bad"/><path class="x26a8iq1c"/><path class="ugztwkaee"/><path class="j-bg0m85s"/><path class="th8j40bfn"/></g>`,
		"fallback": "iconmind:event-bus-duotone-thin",
	});
}

export default Component;
