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

.kmcdy3_km {
  d: path("M136 96H40l48-48Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nqsc2sbzl {
  d: path("M232 184H96v-80h40a8 8 0 0 0 5.66-13.66l-48-48a8 8 0 0 0-11.32 0l-48 48A8 8 0 0 0 40 104h40v88a8 8 0 0 0 8 8h144a8 8 0 0 0 0-16M88 59.31L116.69 88H59.31Z");
}
</style><g class="cuyn6tgcc"><path class="kmcdy3_km"/><path class="nqsc2sbzl"/></g>`,
		"fallback": "ph:arrow-elbow-left-up-duotone",
	});
}

export default Component;
