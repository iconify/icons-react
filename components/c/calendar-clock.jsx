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
		"content": `<style>.i14uz9bvv {
  d: path("M9 15.25a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}

.luptx_bzl {
  d: path("M12 14v1.25l1 1");
}

.sa23nmb2h {
  d: path("M3.5 5h17v15.5h-17ZM8 3v4m8-4v4M3.5 10h17");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="sa23nmb2h"/><path class="i14uz9bvv"/><path class="luptx_bzl"/></g>`,
		"fallback": "uix-sharp:calendar-clock",
	});
}

export default Component;
