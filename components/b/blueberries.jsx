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
		"content": `<style>.ba52tc18v {
  d: path("M4 10a4 4 0 1 0 8 0a4 4 0 1 0-8 0Zm8 0a4 4 0 1 0 8 0a4 4 0 1 0-8 0Z");
}

.cjbr02w6z {
  d: path("M8 17a4 4 0 1 0 8 0a4 4 0 1 0-8 0Zm0-7h.01M16 10h.01M12 17h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ba52tc18v"/><path class="cjbr02w6z"/></g>`,
		"fallback": "uix-sharp:blueberries",
	});
}

export default Component;
