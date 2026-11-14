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
		"content": `<style>.azx5sst8q {
  d: path("M10.5 11a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m-3-8h.01M12 2.5h.01m4.49.5h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vsy792nia {
  d: path("M12 6.5a2.5 2.5 0 0 1 4 2.25a2.5 2.5 0 0 1 0 4.5a2.5 2.5 0 0 1-4 2.25a2.5 2.5 0 0 1-4-2.25a2.5 2.5 0 0 1 0-4.5a2.5 2.5 0 0 1 4-2.25m0 9v6");
}
</style><g class="hntgybcog"><path class="vsy792nia"/><path class="azx5sst8q"/></g>`,
		"fallback": "uix:flower-pollen",
	});
}

export default Component;
