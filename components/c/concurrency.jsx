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
		"content": `<style>.l02t2qs1j {
  d: path("M19.5 3.5L21 6l-2.75 1M3 18q8-7 16-4");
}

.nb6fasbvt {
  d: path("M5 10q8-7 16-4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vypfsppjx {
  d: path("M17.5 11.5L19 14l-2.75 1");
}
</style><g class="ulnmmdpxh"><path class="nb6fasbvt"/><path class="l02t2qs1j"/><path class="vypfsppjx"/></g>`,
		"fallback": "uix-sharp:concurrency",
	});
}

export default Component;
