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

.mzsriz35t {
  d: path("M208 96v120a8 8 0 0 1-8 8h-24v-72a16 16 0 0 0-16-16H96a16 16 0 0 0-16 16v72H56a8 8 0 0 1-8-8V96a48 48 0 0 1 48-48h64a48 48 0 0 1 48 48");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.xyl2xecvg {
  d: path("M168 40.58V32a24 24 0 0 0-24-24h-32a24 24 0 0 0-24 24v8.58A56.09 56.09 0 0 0 40 96v120a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V96a56.09 56.09 0 0 0-48-55.42M112 24h32a8 8 0 0 1 8 8v8h-48v-8a8 8 0 0 1 8-8m56 136H88v-8a8 8 0 0 1 8-8h64a8 8 0 0 1 8 8Zm-80 16h48v8a8 8 0 0 0 16 0v-8h16v40H88Zm112 40h-16v-64a24 24 0 0 0-24-24H96a24 24 0 0 0-24 24v64H56V96a40 40 0 0 1 40-40h64a40 40 0 0 1 40 40zM152 88a8 8 0 0 1-8 8h-32a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8");
}
</style><g class="cuyn6tgcc"><path class="mzsriz35t"/><path class="xyl2xecvg"/></g>`,
		"fallback": "ph:backpack-duotone",
	});
}

export default Component;
