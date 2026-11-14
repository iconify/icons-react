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
		"content": `<style>.ghptnibpi {
  d: path("M8 7.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm3 0h.01");
}

.hdmrhmb2a {
  d: path("M6 10.5h15.5l-2.5 5H7.5Z");
}

.nhlh76bpz {
  d: path("M11 4.5c-5 0-8 2.5-8 7v7.75");
}

.ot42mbc9t {
  d: path("M2.5 19.25q1.75-1.25 3.5 0t3.5 0t3.5 0t3.5 0t3.5 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hdmrhmb2a"/><path class="ghptnibpi"/><path class="nhlh76bpz"/><path class="ot42mbc9t"/></g>`,
		"fallback": "uix-sharp:cable-layer",
	});
}

export default Component;
