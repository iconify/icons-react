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

.ho3n4gbpp {
  d: path("m224 160l-48 48l-48-48Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.mzf4v3bcu {
  d: path("M231.39 156.94A8 8 0 0 0 224 152h-40V64a8 8 0 0 0-8-8H32a8 8 0 0 0 0 16h136v80h-40a8 8 0 0 0-5.66 13.66l48 48a8 8 0 0 0 11.32 0l48-48a8 8 0 0 0 1.73-8.72M176 196.69L147.31 168h57.38Z");
}
</style><g class="cuyn6tgcc"><path class="ho3n4gbpp"/><path class="mzf4v3bcu"/></g>`,
		"fallback": "ph:arrow-elbow-right-down-duotone",
	});
}

export default Component;
