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
		"content": `<style>.q-asl0bta {
  d: path("M12.2 18.5H2.5v-13h19v9.7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xwhbjh_fe {
  d: path("M9 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm9 3v6m-3-3h6");
}
</style><g class="ulnmmdpxh"><path class="q-asl0bta"/><path class="xwhbjh_fe"/></g>`,
		"fallback": "uix-sharp:deduction-add",
	});
}

export default Component;
