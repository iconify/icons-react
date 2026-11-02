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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qcsbc6bpx {
  d: path("M12 7v14m9-9a9 9 0 0 1-18 0m0 0h2m16 0h-2M9 11h6");
}

.zlwqkrb4e {
  stroke-opacity: 0.4;
  d: path("M10 5a2 2 0 1 0 4 0a2 2 0 0 0-4 0");
}
</style><g class="nrj6p8qat"><path class="zlwqkrb4e"/><path class="qcsbc6bpx"/></g>`,
		"fallback": "coolicons:anchor-duocolor",
	});
}

export default Component;
