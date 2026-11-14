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
		"content": `<style>.a-qng6b-l {
  d: path("M5.5 21v-8h6.9m2.85 1.25h6.5v7h-6.5Zm0 3.25h6.5");
}

.j6id6fxzf {
  d: path("M12.401 21H2.5V10L12 3l9.5 7v1.499");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="j6id6fxzf"/><path class="a-qng6b-l"/></g>`,
		"fallback": "uix-sharp:engine-shed",
	});
}

export default Component;
