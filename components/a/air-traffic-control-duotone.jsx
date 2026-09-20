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

.q24l8nwqa {
  d: path("m223.51 82.73l-26.18 72a8 8 0 0 1-7.52 5.27H66.19a8 8 0 0 1-7.52-5.27l-26.18-72A8 8 0 0 1 40 72h176a8 8 0 0 1 7.51 10.73");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.v3po3p-5o {
  d: path("M229.11 70.82A16 16 0 0 0 216 64h-80V32h16a8 8 0 0 0 0-16h-48a8 8 0 0 0 0 16h16v32H40a16 16 0 0 0-15 21.47l26.19 72a16 16 0 0 0 15 10.53H96v64a8 8 0 0 0 16 0v-64h32v64a8 8 0 0 0 16 0v-64h29.82a16 16 0 0 0 15-10.53l26.19-72a16 16 0 0 0-1.9-14.65M110.68 152l-13.1-72h60.84l-13.1 72ZM40 80h41.32l13.09 72H66.18Zm149.82 72h-28.23l13.09-72H216Z");
}
</style><g class="cuyn6tgcc"><path class="q24l8nwqa"/><path class="v3po3p-5o"/></g>`,
		"fallback": "ph:air-traffic-control-duotone",
	});
}

export default Component;
