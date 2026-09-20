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
		"content": `<style>.b5x3oqb_u {
  d: path("M6 10v6");
}

.inp0fub_p {
  d: path("M2 6a2 2 0 0 1 2 -2h9a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.jlpxneb5g {
  d: path("M9 8v8");
}

.m27ljac1c {
  d: path("m18 9 3 3 -3 3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.v0y09obth {
  d: path("M12 12v4");
}

.zy54a7bml {
  d: path("M17 12h4");
}
</style><g class="nrj6p8qat"><path class="inp0fub_p"/><path class="b5x3oqb_u"/><path class="jlpxneb5g"/><path class="v0y09obth"/><path class="zy54a7bml"/><path class="m27ljac1c"/></g>`,
		"fallback": "iconmind:export-report-outline-regular",
	});
}

export default Component;
