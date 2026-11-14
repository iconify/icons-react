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

.k67_umbik {
  d: path("M12 9.5v2M9.5 16v-2a2.5 2.5 0 0 1 5 0v2l.75 1h-6.5zm2.5 3.25h.01");
}

.olvjgvbfj {
  d: path("M6.5 21.5V15a5.5 5.5 0 0 1 11 0v6.5");
}

.t6_d45yfx {
  d: path("M3 21.5V11l9-6l9 6v10.5M12 2v3m-1.5-1.5h3");
}
</style><g class="hntgybcog"><path class="t6_d45yfx"/><path class="olvjgvbfj"/><path class="k67_umbik"/></g>`,
		"fallback": "uix:chapel-bell-gable",
	});
}

export default Component;
