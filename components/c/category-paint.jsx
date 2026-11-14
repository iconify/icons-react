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
		"content": `<style>.ibsdrw_vc {
  d: path("M4 3.5h16v6H4Zm8 6v4m0 0h-2V21h4v-7.5h-2");
}

.trm8uhbia {
  d: path("M20 6.5V12h-8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ibsdrw_vc"/><path class="trm8uhbia"/></g>`,
		"fallback": "uix-sharp:category-paint",
	});
}

export default Component;
