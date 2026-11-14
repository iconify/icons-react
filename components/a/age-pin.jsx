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
		"content": `<style>.gq9gvxuzc {
  d: path("M12.75 13.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Z");
}

.hi5ydxdws {
  d: path("M7.5 9V7a4.5 4.5 0 0 1 9 0v2M3 9h18v12.5H3Zm6 2.75v7");
}

.uggczyo5f {
  d: path("M12.75 17a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hi5ydxdws"/><path class="gq9gvxuzc"/><path class="uggczyo5f"/></g>`,
		"fallback": "uix-sharp:age-pin",
	});
}

export default Component;
