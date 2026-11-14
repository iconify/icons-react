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
		"content": `<style>.fy8wmcbpp {
  d: path("M6.5 12h3.25m4.5 0h3.25");
}

.o5ctvpb8n {
  fill: currentColor;
  d: path("M2 12a2.25 2.25 0 1 0 4.5 0A2.25 2.25 0 1 0 2 12Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xqho0gbyr {
  d: path("M9.75 12a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm7.75 0a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Z");
}
</style><g class="ulnmmdpxh"><path class="fy8wmcbpp"/><path class="o5ctvpb8n"/><path class="xqho0gbyr"/></g>`,
		"fallback": "uix-sharp:checkout-steps",
	});
}

export default Component;
