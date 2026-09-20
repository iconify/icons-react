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

.fw_-f4u_a {
  d: path("M216 128a88 88 0 1 1-88-88a88 88 0 0 1 88 88");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.uo97o_bgk {
  d: path("m198.24 62.63l15.68-17.25a8 8 0 0 0-11.84-10.76L186.4 51.86A95.95 95.95 0 0 0 57.76 193.37l-15.68 17.25a8 8 0 1 0 11.84 10.76l15.68-17.24A95.95 95.95 0 0 0 198.24 62.63M48 128a80 80 0 0 1 127.6-64.25l-107 117.73A79.63 79.63 0 0 1 48 128m80 80a79.55 79.55 0 0 1-47.6-15.75l107-117.73A79.95 79.95 0 0 1 128 208");
}
</style><g class="cuyn6tgcc"><path class="fw_-f4u_a"/><path class="uo97o_bgk"/></g>`,
		"fallback": "ph:empty-duotone",
	});
}

export default Component;
