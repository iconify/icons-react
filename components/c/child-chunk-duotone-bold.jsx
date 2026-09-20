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
		"content": `<style>.i-xag2bkh {
  d: path("M3 6.5A3.5 3.5 0 0 1 6.5 3h11A3.5 3.5 0 0 1 21 6.5a3.5 3.5 0 0 1 -3.5 3.5h-11A3.5 3.5 0 0 1 3 6.5");
}

.kzek4ybzp {
  d: path("M7 17a3 3 0 0 1 3 -3h4a3 3 0 0 1 3 3 3 3 0 0 1 -3 3h-4a3 3 0 0 1 -3 -3");
}

.mxzk029nb {
  d: path("M12 10v4");
}

.oalgtdezc {
  fill: currentColor;
  d: path("M7 17a3 3 0 0 1 3 -3h4a3 3 0 0 1 3 3 3 3 0 0 1 -3 3h-4a3 3 0 0 1 -3 -3");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.rru--w-8z {
  fill: currentColor;
  d: path("M3 6.5A3.5 3.5 0 0 1 6.5 3h11A3.5 3.5 0 0 1 21 6.5a3.5 3.5 0 0 1 -3.5 3.5h-11A3.5 3.5 0 0 1 3 6.5");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="rru--w-8z"/><path class="oalgtdezc"/><path class="i-xag2bkh"/><path class="mxzk029nb"/><path class="kzek4ybzp"/></g>`,
		"fallback": "iconmind:child-chunk-duotone-bold",
	});
}

export default Component;
