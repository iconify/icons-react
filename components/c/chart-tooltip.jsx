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
		"content": `<style>.jybf6-bhw {
  d: path("M11.5 2.5h7a2 2 0 0 1 2 2V6a2 2 0 0 1-2 2h-2L15 10l-1.5-2h-2a2 2 0 0 1-2-2V4.5a2 2 0 0 1 2-2Zm1 2.75h5");
}

.kpcwc9npf {
  d: path("M2.5 20L7 15.5l4 2l4-4.5l6.5 3.5");
}

.spt6qyw1h {
  fill: currentColor;
  d: path("M13.5 13a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="kpcwc9npf"/><path class="spt6qyw1h"/><path class="jybf6-bhw"/></g>`,
		"fallback": "uix-sharp:chart-tooltip",
	});
}

export default Component;
