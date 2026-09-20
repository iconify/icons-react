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
		"content": `<style>.hlkk9_bki {
  d: path("M7 10c0 4 2 6 5 6s5 -2 5 -6");
}

.kaeoqxqgu {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M7 10V5h10v5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nn07zobkj {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M7 10c0 4 2 6 5 6s5 -2 5 -6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.qkmhvkbue {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M6 21v-3h12v3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.tb3ak12-o {
  d: path("M6 21v-3h12v3");
}

.wu-svqt-l {
  d: path("M7 10V5h10v5");
}
</style><g class="s0phu2bbs"><path class="kaeoqxqgu"/><path class="nn07zobkj"/><path class="qkmhvkbue"/><path class="wu-svqt-l"/><path class="hlkk9_bki"/><path class="tb3ak12-o"/></g>`,
		"fallback": "iconmind:game-avatar-duotone-bold",
	});
}

export default Component;
