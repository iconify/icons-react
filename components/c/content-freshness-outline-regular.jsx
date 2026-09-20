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
		"content": `<style>.abnm6smsv {
  d: path("M13 3H6v18h12V8");
}

.dx5s6zbrc {
  d: path("M8 12a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
}

.gib7r1bvf {
  d: path("M12 9.5V12");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.tbr41ebiu {
  d: path("M12 12h2.5");
}
</style><g class="nrj6p8qat"><path class="abnm6smsv"/><path class="dx5s6zbrc"/><path class="gib7r1bvf"/><path class="tbr41ebiu"/></g>`,
		"fallback": "iconmind:content-freshness-outline-regular",
	});
}

export default Component;
