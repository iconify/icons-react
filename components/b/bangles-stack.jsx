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
		"content": `<style>.qcyrzdcmv {
  d: path("M6.5 17a7.5 3.5 0 1 0 15 0a7.5 3.5 0 1 0-15 0Z");
}

.ssdt96b_e {
  d: path("M2.5 7a7.5 3.5 0 1 0 15 0a7.5 3.5 0 1 0-15 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xmms1nfsq {
  d: path("M4.5 12a7.5 3.5 0 1 0 15 0a7.5 3.5 0 1 0-15 0Z");
}
</style><g class="ulnmmdpxh"><path class="ssdt96b_e"/><path class="xmms1nfsq"/><path class="qcyrzdcmv"/></g>`,
		"fallback": "uix-sharp:bangles-stack",
	});
}

export default Component;
