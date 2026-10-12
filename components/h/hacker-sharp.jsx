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
		"content": `<style>.j3vhvtb2p {
  d: path("M8.25 10.25a3.75 3.75 0 0 1 7.5 0v1.5a3.75 3.75 0 0 1-7.5 0Zm2.25.25h3");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zz0azdcba {
  d: path("M12 2.75c-3.6 0-6.25 3-6.25 7V12l-2.5 4v5.25h17.5V16l-2.5-4V9.75c0-4-2.65-7-6.25-7Z");
}
</style><g class="x2cwu0gfd"><path class="zz0azdcba"/><path class="j3vhvtb2p"/></g>`,
		"fallback": "iconoven:hacker-sharp",
	});
}

export default Component;
