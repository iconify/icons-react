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
		"content": `<style>.ab69i60qd {
  d: path("M5.5 4H3v16h2.5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qebvfnl4i {
  d: path("M18.5 4H21v16h-2.5");
}

.uxyzhxvwz {
  d: path("M7 12h10");
}
</style><g class="nrj6p8qat"><path class="ab69i60qd"/><path class="qebvfnl4i"/><path class="uxyzhxvwz"/></g>`,
		"fallback": "iconmind:context-length-outline-regular",
	});
}

export default Component;
