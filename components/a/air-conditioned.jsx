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
		"content": `<style>.bflvnob4t {
  d: path("M5 18.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm10 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-12.5 2h19M12 6.25v7.5m-3.25-5.5l6.5 3.5m-6.5 0l6.5-3.5");
}

.hq-h8uxcp {
  d: path("M2.5 3.5h19v13h-19Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hq-h8uxcp"/><path class="bflvnob4t"/></g>`,
		"fallback": "uix-sharp:air-conditioned",
	});
}

export default Component;
