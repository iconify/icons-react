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

.no0njmbpm {
  d: path("M192 168a40 40 0 0 1-40 40h-24v-80h24a40 40 0 0 1 40 40M112 48a40 40 0 0 0 0 80h16V48Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.p5uaauunv {
  d: path("M152 120h-16V56h8a32 32 0 0 1 32 32a8 8 0 0 0 16 0a48.05 48.05 0 0 0-48-48h-8V24a8 8 0 0 0-16 0v16h-8a48 48 0 0 0 0 96h8v64h-16a32 32 0 0 1-32-32a8 8 0 0 0-16 0a48.05 48.05 0 0 0 48 48h16v16a8 8 0 0 0 16 0v-16h16a48 48 0 0 0 0-96m-40 0a32 32 0 0 1 0-64h8v64Zm40 80h-16v-64h16a32 32 0 0 1 0 64");
}
</style><g class="cuyn6tgcc"><path class="no0njmbpm"/><path class="p5uaauunv"/></g>`,
		"fallback": "ph:currency-dollar-duotone",
	});
}

export default Component;
