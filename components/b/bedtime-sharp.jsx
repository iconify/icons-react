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
		"content": `<style>.a-ga0lihp {
  d: path("M12 3a6.5 6.5 0 0 0 9 9a9 9 0 1 1-9-9Z");
}

.f8wpp6b9a {
  d: path("M15.5 4.5H19l-3.5 4H19");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="a-ga0lihp"/><path class="f8wpp6b9a"/></g>`,
		"fallback": "iconoven:bedtime-sharp",
	});
}

export default Component;
