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

.u_mpg_szn {
  d: path("M90.34 61.66a8 8 0 0 1 0-11.32l32-32a8 8 0 0 1 11.32 0l32 32a8 8 0 0 1-11.32 11.32L136 43.31V96a8 8 0 0 1-16 0V43.31l-18.34 18.35a8 8 0 0 1-11.32 0m64 132.68L136 212.69V160a8 8 0 0 0-16 0v52.69l-18.34-18.35a8 8 0 0 0-11.32 11.32l32 32a8 8 0 0 0 11.32 0l32-32a8 8 0 0 0-11.32-11.32m83.32-72l-32-32a8 8 0 0 0-11.32 11.32L212.69 120H160a8 8 0 0 0 0 16h52.69l-18.35 18.34a8 8 0 0 0 11.32 11.32l32-32a8 8 0 0 0 0-11.32M43.31 136H96a8 8 0 0 0 0-16H43.31l18.35-18.34a8 8 0 0 0-11.32-11.32l-32 32a8 8 0 0 0 0 11.32l32 32a8 8 0 0 0 11.32-11.32Z");
}

.w_vdicbgh {
  d: path("M232 128L128 232L24 128L128 24Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="w_vdicbgh"/><path class="u_mpg_szn"/></g>`,
		"fallback": "ph:arrows-out-cardinal-duotone",
	});
}

export default Component;
