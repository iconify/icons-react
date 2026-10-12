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

.it-qfxbvy {
  d: path("M11.75 21.25h-4.5a2.5 2.5 0 0 1-2.5-2.5V5.25a2.5 2.5 0 0 1 2.5-2.5h6.5l5.5 5.5v3.5");
}

.w4sxbibso {
  d: path("M16 18.75v2.5l1.5-.75l1.5.75v-2.5");
}

.wmgztcjui {
  d: path("M13.75 2.75v3.5a2 2 0 0 0 2 2h3.5m-11 4h4");
}

.zk72-vvrv {
  cx: 17.5px;
  cy: 16.25px;
  r: 2.5px;
}
</style><g class="hntgybcog"><path class="it-qfxbvy"/><path class="wmgztcjui"/><circle class="zk72-vvrv"/><path class="w4sxbibso"/></g>`,
		"fallback": "iconoven:file-certificate",
	});
}

export default Component;
