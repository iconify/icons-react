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
		"content": `<style>.c9sgi36ry {
  d: path("M16 8c3 0 4 2 4 5");
}

.gcalxb98a {
  d: path("M8 13h8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w0229ybxd {
  d: path("M8 10a4 4 0 0 1 8 0v9a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2Z");
}

.wyy34ebaj {
  d: path("M10 6V3.5h5");
}
</style><g class="hntgybcog"><path class="w0229ybxd"/><path class="wyy34ebaj"/><path class="c9sgi36ry"/><path class="gcalxb98a"/></g>`,
		"fallback": "iconmind:fire-extinguisher-outline-thin",
	});
}

export default Component;
