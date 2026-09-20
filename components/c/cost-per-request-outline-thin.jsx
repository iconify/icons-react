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
		"content": `<style>.bqn9n10jh {
  d: path("M3 6a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.g45cwl_by {
  d: path("M12 17a5 5 0 1 0 10 0 5 5 0 1 0 -10 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.u514_sb-x {
  d: path("m8 8 6 6");
}
</style><g class="hntgybcog"><path class="bqn9n10jh"/><path class="u514_sb-x"/><path class="g45cwl_by"/></g>`,
		"fallback": "iconmind:cost-per-request-outline-thin",
	});
}

export default Component;
