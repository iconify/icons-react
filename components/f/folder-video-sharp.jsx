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
		"content": `<style>.dy059y5wf {
  d: path("M2.75 7.25v-2.5h7.1l.6.8L11.55 7l.6.8h9.1v11.45H2.75v-2.5Zm0 3.5h18.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xlzpe0btu {
  d: path("M10.25 13v4.75l.64-.39l3.22-1.97l.64-.39l-.64-.39l-3.22-1.97l-.64-.39z");
}
</style><g class="x2cwu0gfd"><path class="dy059y5wf"/><path class="xlzpe0btu"/></g>`,
		"fallback": "iconoven:folder-video-sharp",
	});
}

export default Component;
