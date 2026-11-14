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
		"content": `<style>.awh0zbb4c {
  d: path("M6 6h4v4H6Zm11.75 8l1.029 2.084l2.3.334l-1.665 1.623l.393 2.291l-2.057-1.082l-2.057 1.082l.393-2.291l-1.665-1.623l2.3-.334Z");
}

.qep_tbbqt {
  d: path("M12.5 18.4V21h-9V3h9v10.9m0-2.9h3.6m2.386-1.767Q18.5 9.117 18.5 9V5.5l-2-2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="qep_tbbqt"/><path class="awh0zbb4c"/></g>`,
		"fallback": "uix-sharp:fuel-points",
	});
}

export default Component;
