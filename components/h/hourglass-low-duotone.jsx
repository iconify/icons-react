import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.em-8dfbuv {
  d: path("M200 75.64V40a16 16 0 0 0-16-16H72a16 16 0 0 0-16 16v36a16.07 16.07 0 0 0 6.4 12.8l52.27 39.2l-52.27 39.2A16.07 16.07 0 0 0 56 180v36a16 16 0 0 0 16 16h112a16 16 0 0 0 16-16v-35.64a16.08 16.08 0 0 0-6.35-12.76L141.27 128l52.38-39.59A16.09 16.09 0 0 0 200 75.64M178.23 176H77.33L128 138ZM72 216v-24h112v24ZM184 75.64L128 118L72 76V40h112Z");
}

.l31x2johq {
  d: path("M192 184v32a8 8 0 0 1-8 8H72a8 8 0 0 1-8-8v-32Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="l31x2johq"/><path class="em-8dfbuv"/></g>`,
		"fallback": "ph:hourglass-low-duotone",
	});
}

export default Component;
