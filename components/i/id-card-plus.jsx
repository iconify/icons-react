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
		"content": `<style>.gzvruzbbi {
  d: path("M5.25 13a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm6.25 0h3m-9 4.5h9m4.75-15.25v5m-2.5-2.5h5");
}

.lcgco3_cb {
  d: path("M2.5 8h15v12.5h-15Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="lcgco3_cb"/><path class="gzvruzbbi"/></g>`,
		"fallback": "uix-sharp:id-card-plus",
	});
}

export default Component;
