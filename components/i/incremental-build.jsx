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
		"content": `<style>.cd52s_yqj {
  d: path("m3 7l9 4.5L21 7m-9 4.5v10M7.5 4.75l9 4.5m-1 12.25h2.25V19H20v-2.5h2");
}

.niq9g_bcr {
  d: path("M12.738 21.131L12 21.5L3 17V7l9-4.5L21 7v6.738");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="niq9g_bcr"/><path class="cd52s_yqj"/></g>`,
		"fallback": "uix-sharp:incremental-build",
	});
}

export default Component;
