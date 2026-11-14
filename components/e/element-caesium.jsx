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
		"content": `<style>.asd-ebbhq {
  d: path("M12 7s4 4.5 4 7a4 4 0 0 1-8 0c0-2.5 4-7 4-7Z");
}

.j_psw1y4g {
  d: path("M3 3h18v18H3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="j_psw1y4g"/><path class="asd-ebbhq"/></g>`,
		"fallback": "uix-sharp:element-caesium",
	});
}

export default Component;
