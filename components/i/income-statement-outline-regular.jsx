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
		"content": `<style>.ky4omnbla {
  d: path("M4 5h14l4 4v8a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2V7a2 2 0 0 1 2 -2m14 0v4h4");
}

.l517yxbln {
  d: path("M12 9v6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.y5493mbgk {
  d: path("M9.5 11.5 12 9l2.5 2.5");
}
</style><g class="nrj6p8qat"><path class="ky4omnbla"/><path class="l517yxbln"/><path class="y5493mbgk"/></g>`,
		"fallback": "iconmind:income-statement-outline-regular",
	});
}

export default Component;
