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
		"content": `<style>.el71wj1ci {
  d: path("M2.5 12h19c-.5 5-4.5 7.75-9.5 7.75S3 17 2.5 12Zm1 0a2.5 2.5 0 0 1 5 0a4.5 4.5 0 0 1 7 0a2.5 2.5 0 0 1 5 0");
}

.q3xopz4ra {
  d: path("M9.5 7.75a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm7-.25a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="el71wj1ci"/><path class="q3xopz4ra"/></g>`,
		"fallback": "uix-sharp:granola-bowl",
	});
}

export default Component;
