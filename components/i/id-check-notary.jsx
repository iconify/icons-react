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
		"content": `<style>.id5kcabgz {
  d: path("M12.3 19.5H2.5v-15h19v7.8m0 6.9v.3h-.3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yijxf_bkk {
  d: path("M6 9a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-1 5.5a3 3 0 0 1 6 0M14 9h4m-3.25 9l2 2L21 15.75");
}
</style><g class="ulnmmdpxh"><path class="id5kcabgz"/><path class="yijxf_bkk"/></g>`,
		"fallback": "uix-sharp:id-check-notary",
	});
}

export default Component;
