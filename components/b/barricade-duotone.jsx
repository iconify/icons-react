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

.jq9spqb0b {
  d: path("M224 64H32a16 16 0 0 0-16 16v72a16 16 0 0 0 16 16h24v32a8 8 0 0 0 16 0v-32h112v32a8 8 0 0 0 16 0v-32h24a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16m0 64.69L175.31 80H224ZM80.69 80l72 72h-49.38L32 80.69V80ZM32 103.31L80.69 152H32ZM224 152h-48.69l-72-72h49.38L224 151.32z");
}

.ycf-o272z {
  d: path("M232 80v68l-76-76h68a8 8 0 0 1 8 8M32 72a8 8 0 0 0-8 8v4l76 76h72L84 72Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="ycf-o272z"/><path class="jq9spqb0b"/></g>`,
		"fallback": "ph:barricade-duotone",
	});
}

export default Component;
