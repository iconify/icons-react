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
		"content": `<style>.d_k34lbvd {
  fill: currentColor;
  d: path("M9 19v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-1.171A3 3 0 0 1 3 16v-5a1 1 0 0 1 0-2h.382l1.724-3.447C5.643 4.478 6.652 3.001 8 3h8c1.348.001 2.357 1.478 2.894 2.553L20.618 9H21a1 1 0 0 1 0 2v5c0 1.27-.803 2.405-2 2.829V20a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-1Zm8.106-12.553l-.448-.894A1 1 0 0 0 15.764 5H8.236a1 1 0 0 0-.894.553L5.618 9h12.764ZM8 13a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2Zm8.01 0H16a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2");
}
</style><path class="d_k34lbvd"/>`,
		"fallback": "coolicons:car-fill",
	});
}

export default Component;
