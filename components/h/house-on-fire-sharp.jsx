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
		"content": `<style>.l-ap1lbyj {
  d: path("m8.03 6.03l3.69 3.69l.53.53v11h-9.5v-11l.53-.53l3.69-3.69l.53-.53z");
}

.nh9iutj6h {
  d: path("M6 21.25v-5.5h3v5.5m9.22-5.71a2.97 2.97 0 0 0 2.97-2.97c0-1.87-1.32-2.86-1.98-5.17l-.488 1.342l-1.162.968l-.33-.66l-.44-.44l-1.54 1.711v2.249a2.97 2.97 0 0 0 2.97 2.97Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="l-ap1lbyj"/><path class="nh9iutj6h"/></g>`,
		"fallback": "iconoven:house-on-fire-sharp",
	});
}

export default Component;
