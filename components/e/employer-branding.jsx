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
		"content": `<style>.aluvh07xd {
  d: path("m12 9.75l.882 2.036l2.209.21l-1.664 1.468l.483 2.165L12 14.5l-1.91 1.129l.483-2.165l-1.664-1.468l2.209-.21Z");
}

.t0udq6bsl {
  d: path("M2.5 3h19m-17 4h15v12h-15ZM7 3v4m10-4v4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="t0udq6bsl"/><path class="aluvh07xd"/></g>`,
		"fallback": "uix-sharp:employer-branding",
	});
}

export default Component;
