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
		"content": `<style>.db2cyynzf {
  d: path("m13 8l-2.75 5h3.5L11 18");
}

.evat56uiq {
  d: path("M6.5 4.75h11V21.5h-11Zm3.5-2h4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="evat56uiq"/><path class="db2cyynzf"/></g>`,
		"fallback": "uix-sharp:battery-bolt",
	});
}

export default Component;
