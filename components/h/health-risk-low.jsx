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
		"content": `<style>.bb3m39yax {
  d: path("M10 6.75a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM10 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.l_183db8r {
  d: path("M8 2.5h8a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-17a1 1 0 0 1 1-1Z");
}

.qot83-boh {
  fill: currentColor;
  d: path("M10 17.25a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="l_183db8r"/><path class="bb3m39yax"/><path class="qot83-boh"/></g>`,
		"fallback": "uix-sharp:health-risk-low",
	});
}

export default Component;
