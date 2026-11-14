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
		"content": `<style>.gbc0neese {
  d: path("M2.5 6.25L10 10.5l7.5-4.25M10 10.5V19m5-1.5h6v4h-6Zm1.5 0v-1a1.5 1.5 0 0 1 3 0v1");
}

.idnnbfb2j {
  d: path("M12.211 17.747L10 19l-7.5-4.25v-8.5L10 2l7.5 4.25v5.98");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="idnnbfb2j"/><path class="gbc0neese"/></g>`,
		"fallback": "uix-sharp:api-lock",
	});
}

export default Component;
