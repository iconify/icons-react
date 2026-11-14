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
		"content": `<style>.k2j_68bqp {
  d: path("M17.5 5v3.5H21M14 5v6m0 2.75v6");
}

.srrgwbc_i {
  d: path("M5.5 5h12L21 8.5V11H5.5a3 3 0 0 1 0-6Zm0 8.75H21v6H5.5a3 3 0 0 1 0-6Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="srrgwbc_i"/><path class="k2j_68bqp"/></g>`,
		"fallback": "uix-sharp:camp-blanket",
	});
}

export default Component;
