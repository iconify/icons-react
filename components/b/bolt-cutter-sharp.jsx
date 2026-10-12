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
		"content": `<style>.o9qffsbrd {
  d: path("m12.58 3.22l1.59 1.31l.58.47l-.18.73l-.39 1.54L14 8h-4l-.18-.73l-.39-1.54L9.25 5l.58-.47l1.59-1.31l.58-.47z");
}

.uz8ke0aqn {
  d: path("M9.5 7.75h5v3.5h-5zm2.5-2.5V8m-1.25 3.25L7.5 17m5.75-5.75L16.5 17m-9.08-.66l.66.32l.67.34l-.38.65l-1.74 2.95l-.38.65l-.67-.34l-.66-.32l-.67-.34l.38-.65l1.74-2.95l.38-.65zm10.21.31l1.74 2.95l.38.65l-.67.34l-.66.32l-.67.34l-.38-.65l-1.74-2.95l-.38-.65l.67-.34l.66-.32l.67-.34z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="o9qffsbrd"/><path class="uz8ke0aqn"/></g>`,
		"fallback": "iconoven:bolt-cutter-sharp",
	});
}

export default Component;
