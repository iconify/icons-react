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
		"content": `<style>.iztqypbss {
  d: path("M12.4 18H2.5V4h19v7.7");
}

.m-9ea3bvw {
  d: path("m3.5 5.5l8.5 6l8.5-6m.5 9V17q0 2.5-2.5 2.5h-3.25");
}

.qhie6w2fr {
  d: path("m17.25 17.5l-2 2l2 2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="iztqypbss"/><path class="m-9ea3bvw"/><path class="qhie6w2fr"/></g>`,
		"fallback": "uix-sharp:email-bounce",
	});
}

export default Component;
