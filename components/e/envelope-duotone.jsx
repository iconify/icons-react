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

.irtov08ks {
  d: path("m224 56l-96 88l-96-88Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ocfyvbcla {
  d: path("M224 48H32a8 8 0 0 0-8 8v136a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a8 8 0 0 0-8-8m-96 85.15L52.57 64h150.86ZM98.71 128L40 181.81V74.19Zm11.84 10.85l12 11.05a8 8 0 0 0 10.82 0l12-11.05l58 53.15H52.57ZM157.29 128L216 74.18v107.64Z");
}
</style><g class="cuyn6tgcc"><path class="irtov08ks"/><path class="ocfyvbcla"/></g>`,
		"fallback": "ph:envelope-duotone",
	});
}

export default Component;
