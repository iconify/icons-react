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
		"content": `<style>.e87x0vbte {
  d: path("M6.75 14.75h10.5v4H6.75v-1.5Z");
}

.mwyv4n5ts {
  d: path("M8.25 2.75h7.5v4.5h-7.5zm1.5 4.5v3m4.5-3v3m-10.5 0h16.5v11H3.75z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="mwyv4n5ts"/><path class="e87x0vbte"/></g>`,
		"fallback": "iconoven:ink-bottle-sharp",
	});
}

export default Component;
