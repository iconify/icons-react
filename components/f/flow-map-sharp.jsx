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
		"content": `<style>.b8zfleaxx {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.69 5.4l4.12-1.55l.94-.35l.94.33l4.62 1.59l.94.33l.94-.35l4.12-1.55l.94-.35v14.75l-.94.35l-4.12 1.55l-.94.35l-.94-.33l-4.62-1.59l-.94-.33l-.94.35l-4.12 1.55l-.94.35V5.75z");
}

.fx4rqm3pc {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.75 15.25C8 10.75 12.25 8 17.25 8.5M15 6.5l2.25 2l-1.75 2.25");
}

.i2u_r_zfr {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6.75 15.25h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="b8zfleaxx"/><path class="fx4rqm3pc"/><path class="i2u_r_zfr"/></g>`,
		"fallback": "iconoven:flow-map-sharp",
	});
}

export default Component;
