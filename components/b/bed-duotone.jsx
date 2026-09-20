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

.tyg4u0bos {
  d: path("M216 72H32V48a8 8 0 0 0-16 0v160a8 8 0 0 0 16 0v-32h208v32a8 8 0 0 0 16 0v-96a40 40 0 0 0-40-40M32 88h72v72H32Zm88 72V88h96a24 24 0 0 1 24 24v48Z");
}

.ya016tuhz {
  d: path("M248 112v56H112V80h104a32 32 0 0 1 32 32");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="ya016tuhz"/><path class="tyg4u0bos"/></g>`,
		"fallback": "ph:bed-duotone",
	});
}

export default Component;
