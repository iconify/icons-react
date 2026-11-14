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
		"content": `<style>.avdmz_bvm {
  d: path("M10.75 12a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0");
}

.glt8tni5o {
  d: path("M8.25 12a3.75 9.5 0 1 0 7.5 0a3.75 9.5 0 1 0-7.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lpqbunboo {
  d: path("M2.5 12a9.5 3.75 0 1 0 19 0a9.5 3.75 0 1 0-19 0");
}
</style><g class="hntgybcog"><path class="lpqbunboo"/><path class="glt8tni5o"/><path class="avdmz_bvm"/></g>`,
		"fallback": "uix:gizmo-rotate",
	});
}

export default Component;
