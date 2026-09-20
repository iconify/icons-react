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

.etssx9b6t {
  d: path("m229.66 189.66l-32 32a8 8 0 0 1-11.32 0l-32-32a8 8 0 0 1 11.32-11.32L184 196.69v-57.38l-56-56l-56 56v57.38l18.34-18.35a8 8 0 0 1 11.32 11.32l-32 32a8 8 0 0 1-11.32 0l-32-32a8 8 0 0 1 11.32-11.32L56 196.69V136a8 8 0 0 1 2.34-5.66L120 68.69V24a8 8 0 0 1 16 0v44.69l61.66 61.65A8 8 0 0 1 200 136v60.69l18.34-18.35a8 8 0 0 1 11.32 11.32");
}

.u__3zabws {
  d: path("M192 136v80H64v-80l64-64Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="u__3zabws"/><path class="etssx9b6t"/></g>`,
		"fallback": "ph:arrows-split-duotone",
	});
}

export default Component;
