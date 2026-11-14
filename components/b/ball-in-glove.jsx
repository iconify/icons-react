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
		"content": `<style>.mz02n3byk {
  d: path("m7.5 21.5l-1-4.5c-2.5-1.5-4-4.5-3-7C4.25 8.5 6 8.5 7 10l.5 1c-.5-5 2-8 6-8c4.5 0 7.5 3.5 7 8c-.5 4-2.5 6-3.5 6.5l-.5 4Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zz3kiacgx {
  d: path("M10.25 10a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Zm-3.5 8.5H17");
}
</style><g class="ulnmmdpxh"><path class="mz02n3byk"/><path class="zz3kiacgx"/></g>`,
		"fallback": "uix-sharp:ball-in-glove",
	});
}

export default Component;
