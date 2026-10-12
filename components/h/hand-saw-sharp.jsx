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
		"content": `<style>.a2vb-rbpp {
  d: path("m9.25 6.5l11.25 4.6l.753.329l-.003.821V16l-1.5 1.5l-1.5-1.5l-1.5 1.5l-1.5-1.5l-1.5 1.5l-1.5-1.5l-1.5 1.5l-1.5-1.5Z");
}

.te-hn4bgq {
  d: path("M2.75 5.5H9.5V18H2.75zM5.5 9.75V14");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="a2vb-rbpp"/><path class="te-hn4bgq"/></g>`,
		"fallback": "iconoven:hand-saw-sharp",
	});
}

export default Component;
