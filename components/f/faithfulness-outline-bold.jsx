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
		"content": `<style>.ffw_pwyfz {
  d: path("M12.62 3.5a7 7 0 1 1 -5.24 0");
}

.kfdmhd64i {
  d: path("m15 15 6 6");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.tes-pbkuy {
  d: path("M7 7h6v4l-3 3 -3 -3Z");
}
</style><g class="s0phu2bbs"><path class="ffw_pwyfz"/><path class="kfdmhd64i"/><path class="tes-pbkuy"/></g>`,
		"fallback": "iconmind:faithfulness-outline-bold",
	});
}

export default Component;
