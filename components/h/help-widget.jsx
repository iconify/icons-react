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
		"content": `<style>.k2jt89bee {
  d: path("M12 17a5 5 0 1 0 10 0a5 5 0 1 0-10 0Z");
}

.t71cp2bqs {
  d: path("M15.5 15.75a1.5 1.5 0 0 1 3 0c0 1-1.5 1.25-1.5 2M17 20h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w4d1lwbew {
  d: path("M9.2 16.5H2.5v-14H19v6.9M6 7.5h9.5m-9.5 4h4.5");
}
</style><g class="ulnmmdpxh"><path class="w4d1lwbew"/><path class="k2jt89bee"/><path class="t71cp2bqs"/></g>`,
		"fallback": "uix-sharp:help-widget",
	});
}

export default Component;
