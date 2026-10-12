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
		"content": `<style>.ja-dn8b8f {
  d: path("M12.75 8.25c.5-2 2.25-3.25 4.25-3c.25 2-1 3.75-3 4.25m3-4.25L19.25 3");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xeziyzbse {
  d: path("M14.5 7.5c2 1.25 2.5 3.5 1.75 5.75c-1.25 3.75-4 6.5-7.5 7.5c-2.75.75-5-1-5-3.5c0-2 1.25-3.25 3-4.5c2-1.5 3.25-3 4.25-4.5l1.321-2.202z");
}
</style><g class="x2cwu0gfd"><path class="xeziyzbse"/><path class="ja-dn8b8f"/></g>`,
		"fallback": "iconoven:eggplant-sharp",
	});
}

export default Component;
