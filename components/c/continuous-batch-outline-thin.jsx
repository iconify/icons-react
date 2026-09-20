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
		"content": `<style>.h3f_66bxu {
  d: path("M14 12h5a3 3 0 0 1 3 3v3a3 3 0 0 1 -3 3H5a3 3 0 0 1 -3 -3v-3l3 -3h5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i3md2ibef {
  d: path("M5 16.5a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.sfn7tmb6c {
  d: path("M4 4a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.t_-p3gl9a {
  d: path("M8 6a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.zg6lybc6r {
  d: path("M12 8a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}
</style><g class="hntgybcog"><path class="sfn7tmb6c"/><path class="t_-p3gl9a"/><path class="zg6lybc6r"/><path class="h3f_66bxu"/><path class="i3md2ibef"/></g>`,
		"fallback": "iconmind:continuous-batch-outline-thin",
	});
}

export default Component;
