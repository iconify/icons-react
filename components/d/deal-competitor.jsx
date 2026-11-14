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
		"content": `<style>.g5b17yx9m {
  d: path("m20.5 15.5l-3 3.25h2.75L17.5 21.5");
}

.i8rm8k9yv {
  fill: currentColor;
  d: path("M11.669 21H2.5c0-3.5 2.5-5.75 6-5.75c2.564 0 4.592 1.208 5.493 3.23");
}

.j4dcuq7pb {
  d: path("M13.5 5.25a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0Zm.5 5.5c2.146-.39 4.444.133 5.825 1.332M5.5 9.25a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="j4dcuq7pb"/><path class="i8rm8k9yv"/><path class="g5b17yx9m"/></g>`,
		"fallback": "uix-sharp:deal-competitor",
	});
}

export default Component;
