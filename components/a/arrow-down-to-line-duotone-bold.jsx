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
		"content": `<style>.g4h6r4ykz {
  d: path("M12 4v12");
}

.h1jtp-bio {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M12 4v12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.pkaragbav {
  d: path("m8 12 4 4 4 -4");
}

.q4otffbry {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m8 12 4 4 4 -4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.qdn88l2uv {
  d: path("M7 20h10");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.w1h-xcbkl {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M7 20h10");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="w1h-xcbkl"/><path class="h1jtp-bio"/><path class="q4otffbry"/><path class="qdn88l2uv"/><path class="g4h6r4ykz"/><path class="pkaragbav"/></g>`,
		"fallback": "iconmind:arrow-down-to-line-duotone-bold",
	});
}

export default Component;
