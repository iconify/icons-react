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
		"content": `<style>.mjofdwb5j {
  d: path("M8.75 17q-.5-4.5-1.25-6.75q3 .25 4.5-3.25q1.5 3.5 4.5 3.25q-.75 2.25-1.25 6.75Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wffwdccte {
  d: path("M4 2.5h16v19H4Z");
}

.y8ls1b3qm {
  d: path("M6.5 10.25a1 1 0 1 0 2 0a1 1 0 1 0-2 0ZM11 7a1 1 0 1 0 2 0a1 1 0 1 0-2 0Zm4.5 3.25a1 1 0 1 0 2 0a1 1 0 1 0-2 0Z");
}
</style><g class="ulnmmdpxh"><path class="wffwdccte"/><path class="mjofdwb5j"/><path class="y8ls1b3qm"/></g>`,
		"fallback": "uix-sharp:card-joker",
	});
}

export default Component;
