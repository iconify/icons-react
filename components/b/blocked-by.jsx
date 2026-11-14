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
		"content": `<style>.sbezkcbzn {
  d: path("M19.5 14.75v1l-3 4.5v1");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vulqbg1mb {
  d: path("M12.7 16H5.5V3.5h15v8.4m-18-6.4V14M9 8.5h7m-.5 6.25h5m-5 6.5h5m-4-6.5v1l3 4.5v1");
}
</style><g class="ulnmmdpxh"><path class="vulqbg1mb"/><path class="sbezkcbzn"/></g>`,
		"fallback": "uix-sharp:blocked-by",
	});
}

export default Component;
