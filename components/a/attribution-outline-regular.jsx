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
		"content": `<style>.gmrzwr9af {
  d: path("M14 16a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.nooweob_o {
  d: path("M3 10h12");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.xgrfb-bqu {
  d: path("M3 6h18");
}
</style><g class="nrj6p8qat"><path class="xgrfb-bqu"/><path class="nooweob_o"/><path class="gmrzwr9af"/></g>`,
		"fallback": "iconmind:attribution-outline-regular",
	});
}

export default Component;
