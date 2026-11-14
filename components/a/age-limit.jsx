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
		"content": `<style>.myvjk-u3o {
  d: path("M8.75 9.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w8mxmchtg {
  d: path("M8.5 13.75a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0ZM15.25 12h3.5M17 10.25v3.5");
}

.zos110v1f {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0Zm3.75-4.5v9");
}
</style><g class="ulnmmdpxh"><path class="zos110v1f"/><path class="myvjk-u3o"/><path class="w8mxmchtg"/></g>`,
		"fallback": "uix-sharp:age-limit",
	});
}

export default Component;
