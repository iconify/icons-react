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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.gvze41bon {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M4 13h16v8H4Z");
}

.uf53-16-x {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 13h16v8H4zm0 4h16M9 13v4m6-4v4M4 9l16-4m-8 2v6m-2-9h.01M14 3h.01");
}
</style><g class="ft5dv1b6b"><path class="gvze41bon"/><path class="uf53-16-x"/></g>`,
		"fallback": "coolicons:cable-car-alt-duotone-sharp",
	});
}

export default Component;
