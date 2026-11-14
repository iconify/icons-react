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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nqrxs2bux {
  d: path("m11 9.5l1.5-2H16l.75 2.5l1.25.5l-.75 1.75l-1.75 4.25l-.75 1.25l-1-2.25l-.25-2.5l-1.5-1l-1-1.5Z");
}

.oy9aotbsd {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0");
}

.tdo704kha {
  d: path("M12 2.5C6.5 6 6.5 18 12 21.5");
}
</style><g class="hntgybcog"><path class="oy9aotbsd"/><path class="tdo704kha"/><path class="nqrxs2bux"/></g>`,
		"fallback": "uix:globe-europe-africa",
	});
}

export default Component;
