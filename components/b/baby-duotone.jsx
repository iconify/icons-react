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
		"content": `<style>.aifo_tk9z {
  d: path("M92 140a12 12 0 1 1 12-12a12 12 0 0 1-12 12m72-24a12 12 0 1 0 12 12a12 12 0 0 0-12-12m-12.27 45.23a45 45 0 0 1-47.46 0a8 8 0 0 0-8.54 13.54a61 61 0 0 0 64.54 0a8 8 0 0 0-8.54-13.54M232 128A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-16 0a88.11 88.11 0 0 0-84.09-87.91C120.32 56.38 120 71.88 120 72a8 8 0 0 0 16 0a8 8 0 0 1 16 0a24 24 0 0 1-48 0c0-.73.13-14.3 8.46-30.63A88 88 0 1 0 216 128");
}

.cuyn6tgcc {
  fill: currentColor;
}

.goeug6bgp {
  d: path("M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="goeug6bgp"/><path class="aifo_tk9z"/></g>`,
		"fallback": "ph:baby-duotone",
	});
}

export default Component;
