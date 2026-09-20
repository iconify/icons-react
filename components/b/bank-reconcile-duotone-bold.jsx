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
		"content": `<style>.gcnrhtkpd {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M8 16.5h8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.mcubrkb2y {
  d: path("M2 21h20M5 21V9m14 12V9M2 9h20M5 9l5.5 -5.5h3L19 9");
}

.o4o-99sio {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M8 13.5h8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.ugh6y_a-z {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M2 21h20M5 21V9m14 12V9M2 9h20M5 9l5.5 -5.5h3L19 9");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.wtzvy2bax {
  d: path("M8 16.5h8");
}

.yqc0twwou {
  d: path("M8 13.5h8");
}
</style><g class="s0phu2bbs"><path class="ugh6y_a-z"/><path class="o4o-99sio"/><path class="gcnrhtkpd"/><path class="mcubrkb2y"/><path class="yqc0twwou"/><path class="wtzvy2bax"/></g>`,
		"fallback": "iconmind:bank-reconcile-duotone-bold",
	});
}

export default Component;
