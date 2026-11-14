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
		"content": `<style>.lurz5v9pd {
  d: path("M8.5 15.5c0-5 2.5-7.5 7-7.5c0 4.5-2.5 7.5-7 7.5Zm0 0l4-4");
}

.rkdooe55p {
  d: path("m12 2.5l7.5 3V11c0 5-3 8.5-7.5 10.5c-4.5-2-7.5-5.5-7.5-10.5V5.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="rkdooe55p"/><path class="lurz5v9pd"/></g>`,
		"fallback": "uix-sharp:hypoallergenic",
	});
}

export default Component;
