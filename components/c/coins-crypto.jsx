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
		"content": `<style>.bmzpudbhs {
  d: path("M3 15.5V19a6.5 2.5 0 0 0 13 0v-3.5m-1.25-10a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0Z");
}

.te9g9hvsl {
  d: path("M3 12a6.5 2.5 0 1 0 13 0a6.5 2.5 0 1 0-13 0Z");
}

.tvy1nw5_u {
  d: path("M3 12v3.5a6.5 2.5 0 0 0 13 0V12");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="te9g9hvsl"/><path class="tvy1nw5_u"/><path class="bmzpudbhs"/></g>`,
		"fallback": "uix-sharp:coins-crypto",
	});
}

export default Component;
