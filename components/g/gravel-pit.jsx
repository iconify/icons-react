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
		"content": `<style>.o43gq_1rm {
  d: path("M7.5 17.25a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm4.5 0a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Z");
}

.s4slfdbqi {
  d: path("M9.75 13.25a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vc1l5yppd {
  d: path("M2.5 6h2l3 13.5h9l3-13.5h2");
}
</style><g class="ulnmmdpxh"><path class="vc1l5yppd"/><path class="o43gq_1rm"/><path class="s4slfdbqi"/></g>`,
		"fallback": "uix-sharp:gravel-pit",
	});
}

export default Component;
