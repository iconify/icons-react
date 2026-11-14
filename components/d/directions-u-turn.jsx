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
		"content": `<style>.izm8epb2z {
  d: path("m12.5 13l2 2l2-2");
}

.swwxl7pak {
  d: path("M9.5 15.5V11a2.5 2.5 0 0 1 5 0v4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yh3o8-b_d {
  d: path("M12 2.25L21.75 12L12 21.75L2.25 12Z");
}
</style><g class="ulnmmdpxh"><path class="yh3o8-b_d"/><path class="swwxl7pak"/><path class="izm8epb2z"/></g>`,
		"fallback": "uix-sharp:directions-u-turn",
	});
}

export default Component;
