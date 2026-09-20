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

.lnyv8ibpz {
  d: path("m213.92 210.62l-160-176a8 8 0 1 0-11.85 10.76l58.07 63.86l-79.45 79.44A16 16 0 0 0 32 216h160a16.1 16.1 0 0 0 4.56-.68l5.52 6.06a8 8 0 1 0 11.84-10.76M32 200l78.9-78.89L182.64 200Zm96.18-107.49a8 8 0 0 1 0-11.31l52.51-52.5A16 16 0 0 1 208 40v119.63a8 8 0 0 1-16 0V40l-52.5 52.51a8 8 0 0 1-11.32 0");
}

.qnpr_mqnd {
  d: path("M200 40v160a8 8 0 0 1-8 8H32a8 8 0 0 1-5.66-13.66l160-160A8 8 0 0 1 200 40");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="qnpr_mqnd"/><path class="lnyv8ibpz"/></g>`,
		"fallback": "ph:cell-signal-slash-duotone",
	});
}

export default Component;
