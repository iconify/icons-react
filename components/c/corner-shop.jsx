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
		"content": `<style>.hfzbaxf9c {
  d: path("M3 6.5L4.5 3h15L21 6.5m-18 0a2.25 2.25 0 0 0 4.5 0a2.25 2.25 0 0 0 4.5 0a2.25 2.25 0 0 0 4.5 0a2.25 2.25 0 0 0 4.5 0");
}

.q_ej5804r {
  d: path("M7.75 21v-8h3v8m2.75-8.5h3v3h-3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wzuz58nhn {
  d: path("M5.25 8.75V21h13.5V8.75");
}
</style><g class="ulnmmdpxh"><path class="hfzbaxf9c"/><path class="wzuz58nhn"/><path class="q_ej5804r"/></g>`,
		"fallback": "uix-sharp:corner-shop",
	});
}

export default Component;
