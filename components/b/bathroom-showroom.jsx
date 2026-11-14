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
		"content": `<style>.dib3l5w8e {
  d: path("M5.25 10.75v9.75h7.35m6.15-7.85v-1.9");
}

.eqoe0pbrn {
  d: path("m3 8.5l1.5-5h15l1.5 5a2.25 2.25 0 0 1-4.5 0a2.25 2.25 0 0 1-4.5 0a2.25 2.25 0 0 1-4.5 0a2.25 2.25 0 0 1-4.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uwo084fft {
  d: path("M8 20.5v-5h3.2m.8 4.2v.8m2-5h8v1.25a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3Zm2 4l-.75 2.25M20 19.5l.75 2.25");
}
</style><g class="ulnmmdpxh"><path class="eqoe0pbrn"/><path class="dib3l5w8e"/><path class="uwo084fft"/></g>`,
		"fallback": "uix-sharp:bathroom-showroom",
	});
}

export default Component;
