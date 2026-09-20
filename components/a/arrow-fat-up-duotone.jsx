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
		"content": `<style>.ahzuv7bal {
  d: path("M224 120h-48v88a8 8 0 0 1-8 8H88a8 8 0 0 1-8-8v-88H32l96-96Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.cuyn6tgcc {
  fill: currentColor;
}

.j6rsnacnq {
  d: path("m229.66 114.34l-96-96a8 8 0 0 0-11.32 0l-96 96A8 8 0 0 0 32 128h40v80a16 16 0 0 0 16 16h80a16 16 0 0 0 16-16v-80h40a8 8 0 0 0 5.66-13.66M176 112a8 8 0 0 0-8 8v88H88v-88a8 8 0 0 0-8-8H51.31L128 35.31L204.69 112Z");
}
</style><g class="cuyn6tgcc"><path class="ahzuv7bal"/><path class="j6rsnacnq"/></g>`,
		"fallback": "ph:arrow-fat-up-duotone",
	});
}

export default Component;
