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
		"content": `<style>.gn-qlxbnr {
  d: path("M12 3.75A8.25 8.25 0 1 1 3.75 12");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i89822b9q {
  d: path("M2 13.75L3.75 12l1.75 1.75M8 12a4 4 0 1 0 8 0a4 4 0 1 0-8 0");
}

.zcdte3bzk {
  d: path("M12 9.5V12l1.75 1");
}
</style><g class="hntgybcog"><path class="gn-qlxbnr"/><path class="i89822b9q"/><path class="zcdte3bzk"/></g>`,
		"fallback": "uix:account-timeline",
	});
}

export default Component;
