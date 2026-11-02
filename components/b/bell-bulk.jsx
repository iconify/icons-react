import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

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

.l_n8b4bdz {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M6 18a3 3 0 0 1-3-3c0-.39.098-.773.299-1.108c.133-.222.312-.417.494-.599c.065-.066.145-.133.193-.214C4 13.057 4 13.026 4 13v-3a8 8 0 0 1 16 0v3c0 .026 0 .057.014.079c.048.081.128.148.193.214c.182.182.361.377.494.599c.201.335.299.718.299 1.108a3 3 0 0 1-3 3h-2a4 4 0 0 1-8 0Z");
}

.rfo-hbroq {
  d: path("M10 18a2 2 0 1 0 4 0v-1a1 1 0 0 1 2 0v1a4 4 0 0 1-8 0v-1a1 1 0 0 1 2 0Z");
}
</style><g class="cuyn6tgcc"><path class="l_n8b4bdz"/><path class="rfo-hbroq"/></g>`,
		"fallback": "coolicons:bell-bulk",
	});
}

export default Component;
