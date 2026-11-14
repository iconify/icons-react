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
		"content": `<style>.i1xxpnvzs {
  d: path("M7 16H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2M7 8V3h10v5");
}

.kap-jqbyq {
  d: path("m7 12.5l5 3.5l5-3.5");
}

.pu1vf9btx {
  d: path("M7 12h10v9.5H7Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="i1xxpnvzs"/><path class="pu1vf9btx"/><path class="kap-jqbyq"/></g>`,
		"fallback": "uix-sharp:envelope-print",
	});
}

export default Component;
