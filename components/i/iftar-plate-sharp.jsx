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
		"content": `<style>.g4_qklztr {
  cx: 8.5px;
  cy: 12px;
  r: 5.75px;
}

.gbh5sfbgs {
  d: path("M8.9 8.92a2.1 1.1-35 1 0-3.44 2.41A2.1 1.1-35 1 0 8.9 8.92Zm2.64 3.76a2.1 1.1-35 1 0-3.44 2.41a2.1 1.1-35 1 0 3.44-2.41ZM17.6 6.5h3.65l-.03.6l-.44 9.8l-.03.6H17.5l-.03-.6l-.44-9.8l-.03-.6zm-.45 3h3.95");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="g4_qklztr"/><path class="gbh5sfbgs"/></g>`,
		"fallback": "iconoven:iftar-plate-sharp",
	});
}

export default Component;
