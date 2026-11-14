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
		"content": `<style>.lzci7f_1j {
  d: path("M5 10.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm7-1h5.5M12 13h3.5m-.75 5l2 2L21 15.75");
}

.n_fijn9jq {
  d: path("M10.8 18H2.5V4h19v8.3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="n_fijn9jq"/><path class="lzci7f_1j"/></g>`,
		"fallback": "uix-sharp:guest-checked-in",
	});
}

export default Component;
