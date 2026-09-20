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

.knm69tlpy {
  d: path("M160 56v144l-32 32l-32-32V56l32-32Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.z0l411bfo {
  d: path("M165.66 194.34a8 8 0 0 1 0 11.32l-32 32a8 8 0 0 1-11.32 0l-32-32a8 8 0 0 1 11.32-11.32L120 212.69V43.31l-18.34 18.35a8 8 0 0 1-11.32-11.32l32-32a8 8 0 0 1 11.32 0l32 32a8 8 0 0 1-11.32 11.32L136 43.31v169.38l18.34-18.35a8 8 0 0 1 11.32 0");
}
</style><g class="cuyn6tgcc"><path class="knm69tlpy"/><path class="z0l411bfo"/></g>`,
		"fallback": "ph:arrows-vertical-duotone",
	});
}

export default Component;
