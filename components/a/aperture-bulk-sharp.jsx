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

.ku-n9hbky {
  d: path("M13.599 6.2h.002L16 8V5a1 1 0 0 1 2 0v7.382l2.553-1.276a1 1 0 1 1 .894 1.788l-8.553 4.277L15.6 19.2a1 1 0 0 1-1.2 1.6L8 16v3a1 1 0 0 1-2 0v-7.382l-2.553 1.276a1 1 0 1 1-.894-1.788l8.553-4.277L8.4 4.8a1 1 0 0 1 1.2-1.6Zm-.705 1.971L8 10.618V13.5l3.106 2.329L16 13.382V10.5Z");
}

.txz1j7b0m {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2.786 8.107C4.936 3.02 10.804.639 15.892 2.788s7.469 8.016 5.32 13.104s-8.016 7.469-13.104 5.32S.637 13.195 2.786 8.107M11 17l6-3v-4l-4-3l-6 3v4Z");
}
</style><g class="cuyn6tgcc"><path class="txz1j7b0m"/><path class="ku-n9hbky"/></g>`,
		"fallback": "coolicons:aperture-bulk-sharp",
	});
}

export default Component;
