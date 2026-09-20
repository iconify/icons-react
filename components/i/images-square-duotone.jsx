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
		"content": `<style>.akf17-b9e {
  d: path("M208 32H80a16 16 0 0 0-16 16v16H48a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-16h16a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M80 48h128v69.38l-16.7-16.7a16 16 0 0 0-22.62 0L93.37 176H80Zm96 160H48V80h16v96a16 16 0 0 0 16 16h96Zm32-32h-92l64-64l28 28zm-88-64a24 24 0 1 0-24-24a24 24 0 0 0 24 24m0-32a8 8 0 1 1-8 8a8 8 0 0 1 8-8");
}

.cuyn6tgcc {
  fill: currentColor;
}

.m3riegber {
  d: path("M208 40H80a8 8 0 0 0-8 8v128a8 8 0 0 0 8 8h16.69l77.65-77.66a8 8 0 0 1 11.32 0L216 136.69V48a8 8 0 0 0-8-8m-88 64a16 16 0 1 1 16-16a16 16 0 0 1-16 16");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="m3riegber"/><path class="akf17-b9e"/></g>`,
		"fallback": "ph:images-square-duotone",
	});
}

export default Component;
