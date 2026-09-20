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

.n79bsv-3j {
  d: path("M136 224v-48H48a8 8 0 0 1-8-8V88a8 8 0 0 1 8-8h88V32l96 96Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.peky37bpk {
  d: path("m237.66 122.34l-96-96A8 8 0 0 0 128 32v40H48a16 16 0 0 0-16 16v80a16 16 0 0 0 16 16h80v40a8 8 0 0 0 13.66 5.66l96-96a8 8 0 0 0 0-11.32M144 204.69V176a8 8 0 0 0-8-8H48V88h88a8 8 0 0 0 8-8V51.31L220.69 128Z");
}
</style><g class="cuyn6tgcc"><path class="n79bsv-3j"/><path class="peky37bpk"/></g>`,
		"fallback": "ph:arrow-fat-right-duotone",
	});
}

export default Component;
