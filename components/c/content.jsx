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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vwpu23b9b {
  d: path("M2.5 17L8 11.5l4.187 4.187M13.5 8.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm1.5 6.25l6.25 3.5l-6.25 3.5Z");
}

.xcir0ybyg {
  d: path("M12.2 20.5H2.5v-17h19v11.7");
}
</style><g class="ulnmmdpxh"><path class="xcir0ybyg"/><path class="vwpu23b9b"/></g>`,
		"fallback": "uix-sharp:content",
	});
}

export default Component;
