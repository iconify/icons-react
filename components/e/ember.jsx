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
		"content": `<style>.sozfpjbiv {
  d: path("M12 13.5c1.25 1.25 2 2.25 2 3a2 2 0 0 1-4 0c0-.75.75-1.75 2-3ZM8.5 5.75l-1-3m8 3.5l1-3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vrbsh_h4g {
  d: path("M12 8.5c2.5 2.5 5.5 5 5.5 7.5a5.5 5.5 0 0 1-11 0c0-2.5 3-5 5.5-7.5Z");
}
</style><g class="ulnmmdpxh"><path class="vrbsh_h4g"/><path class="sozfpjbiv"/></g>`,
		"fallback": "uix-sharp:ember",
	});
}

export default Component;
