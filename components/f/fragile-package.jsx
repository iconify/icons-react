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
		"content": `<style>.gzcnkccgj {
  d: path("M12 8.5L10 12l3.5 3l-2.5 5.5");
}

.pny41bcag {
  d: path("M3 3.5h18v17H3Zm0 5h18");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="pny41bcag"/><path class="gzcnkccgj"/></g>`,
		"fallback": "uix-sharp:fragile-package",
	});
}

export default Component;
