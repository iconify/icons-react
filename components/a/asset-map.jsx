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
		"content": `<style>.ef4m474on {
  d: path("m2.5 5.5l4.25-2l10.5 2l4.25-2v15l-4.25 2l-10.5-2l-4.25 2Zm4.25-2v15m10.5-13v15");
}

.r46-v4b3k {
  d: path("M12 17c-2-2-3-4-3-6.25a3 3 0 0 1 6 0C15 13 14 15 12 17Zm0-6.25h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ef4m474on"/><path class="r46-v4b3k"/></g>`,
		"fallback": "uix-sharp:asset-map",
	});
}

export default Component;
