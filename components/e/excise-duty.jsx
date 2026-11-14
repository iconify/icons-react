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
		"content": `<style>.px48ufb1m {
  d: path("m3.5 7l8.5 4.5L20.5 7M12 11.5v8.6m2.75 1.15l6.5-6.5m-5.75.75h.01m4.99 5h.01");
}

.ra377whpp {
  d: path("M11.059 21.002L3.5 17V7L12 2.5L20.5 7v4.582");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ra377whpp"/><path class="px48ufb1m"/></g>`,
		"fallback": "uix-sharp:excise-duty",
	});
}

export default Component;
