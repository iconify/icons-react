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
		"content": `<style>.gyvyhtbmg {
  d: path("M12 16.5h4V19h-1.5a2.5 2.5 0 1 1-2.5-2.5Z");
}

.heaycacyk {
  d: path("M8.5 6a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0ZM3 21.5c0-5 4-8.5 9-8.5s9 3.5 9 8.5M12 13v3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="heaycacyk"/><path class="gyvyhtbmg"/></g>`,
		"fallback": "uix-sharp:coach-person",
	});
}

export default Component;
