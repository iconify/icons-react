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
		"content": `<style>.e7tb_4bvz {
  d: path("M3.868 15.182L15.182 3.868a1.5 1.5 0 0 1 2.121 0l2.829 2.829a1.5 1.5 0 0 1 0 2.121L8.818 20.132a1.5 1.5 0 0 1-2.121 0l-2.829-2.829a1.5 1.5 0 0 1 0-2.121Z");
}

.rt77hvblu {
  d: path("M7.05 12L12 7.05L16.95 12L12 16.95Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="e7tb_4bvz"/><path class="rt77hvblu"/></g>`,
		"fallback": "uix-sharp:adhesive-bandage",
	});
}

export default Component;
