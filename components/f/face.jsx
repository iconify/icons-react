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
		"content": `<style>.tkb05wq3e {
  d: path("m12 10.5l-.75 3h1m-2.5 3h4.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yjnrsga9q {
  d: path("M4.25 12a7.75 9.5 0 1 0 15.5 0a7.75 9.5 0 1 0-15.5 0Zm5-2h.01m5.49 0h.01");
}
</style><g class="ulnmmdpxh"><path class="yjnrsga9q"/><path class="tkb05wq3e"/></g>`,
		"fallback": "uix-sharp:face",
	});
}

export default Component;
