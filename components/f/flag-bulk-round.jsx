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

.lfcpzcboc {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 15V4c0-.379.214-.725.553-.894a8.9 8.9 0 0 1 4.706-.947c.706.05 1.405.176 2.092.341c1.268.306 2.498.75 3.766 1.055c1.162.28 2.351.42 3.537.2a7.2 7.2 0 0 0 1.899-.649A1 1 0 0 1 21 4v11a1 1 0 0 1-.553.894a8.9 8.9 0 0 1-4.706.947a13 13 0 0 1-2.092-.341c-1.268-.306-2.498-.75-3.766-1.055c-1.162-.28-2.351-.42-3.537-.2a7.2 7.2 0 0 0-1.899.649A1 1 0 0 1 3 15");
}

.mk4_tsbqc {
  d: path("M5 15v6a1 1 0 0 1-2 0v-6a1 1 0 0 1 2 0");
}
</style><g class="cuyn6tgcc"><path class="lfcpzcboc"/><path class="mk4_tsbqc"/></g>`,
		"fallback": "coolicons:flag-bulk-round",
	});
}

export default Component;
