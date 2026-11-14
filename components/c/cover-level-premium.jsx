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
		"content": `<style>.g71zn7k-n {
  d: path("M8.5 14.25L7 21l2.75-1.25L12 21l2.25-1.25L17 21l-1.5-6.75M12 6l.94 1.956l2.151.29l-1.569 1.498l.388 2.135L12 10.85l-1.91 1.029l.388-2.135l-1.569-1.498l2.151-.29Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zwz9jvx6z {
  d: path("M5.5 9a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0Z");
}
</style><g class="ulnmmdpxh"><path class="zwz9jvx6z"/><path class="g71zn7k-n"/></g>`,
		"fallback": "uix-sharp:cover-level-premium",
	});
}

export default Component;
