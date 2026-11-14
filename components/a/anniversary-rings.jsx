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
		"content": `<style>.dauc5gghs {
  d: path("m12.5 4.25l1.25-1.75h2.5l1.25 1.75l-2.5 3Z");
}

.lszrxibaj {
  d: path("M9.5 12a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0Z");
}

.pq9uv809h {
  d: path("M3.5 15a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="pq9uv809h"/><path class="lszrxibaj"/><path class="dauc5gghs"/></g>`,
		"fallback": "uix-sharp:anniversary-rings",
	});
}

export default Component;
