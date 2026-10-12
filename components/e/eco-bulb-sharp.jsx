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
		"content": `<style>.iwrf6ubne {
  d: path("M7.75 12.75a5.75 5.75 0 1 1 8.5 0Zm1.25 3h7l-.22.98l-.81 3.54l-.22.98h-5.5l-.22-.98l-.81-3.54l-.22-.98z");
}

.jiwccbb4o {
  d: path("M9.5 10.25c.25-2.6 1.5-3.75 5-3.75c-.25 2.6-1.5 3.75-5 3.75Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="iwrf6ubne"/><path class="jiwccbb4o"/></g>`,
		"fallback": "iconoven:eco-bulb-sharp",
	});
}

export default Component;
