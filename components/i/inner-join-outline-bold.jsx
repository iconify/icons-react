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
		"content": `<style>.ewesysbte {
  d: path("M12 20.37a8.5 8.5 0 0 1 0 -16.74");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.ygpel9b0x {
  d: path("M12 3.63a8.5 8.5 0 0 1 0 16.74");
}
</style><g class="s0phu2bbs"><path class="ygpel9b0x"/><path class="ewesysbte"/></g>`,
		"fallback": "iconmind:inner-join-outline-bold",
	});
}

export default Component;
