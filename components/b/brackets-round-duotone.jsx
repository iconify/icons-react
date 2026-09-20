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

.q4nd5sa9g {
  d: path("M40 128c0 58.29 34.67 80.25 36.15 81.16a8 8 0 0 1-8.27 13.7C66.09 221.78 24 195.75 24 128s42.09-93.78 43.88-94.86a8 8 0 0 1 8.26 13.7C74.54 47.83 40 69.82 40 128m148.12-94.86a8 8 0 0 0-8.27 13.7C181.33 47.75 216 69.71 216 128s-34.67 80.25-36.12 81.14a8 8 0 0 0 8.24 13.72C189.91 221.78 232 195.75 232 128s-42.09-93.78-43.88-94.86");
}

.v_suwkbbc {
  d: path("M224 128c0 64-40 88-40 88H72s-40-24-40-88s40-88 40-88h112s40 24 40 88");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="v_suwkbbc"/><path class="q4nd5sa9g"/></g>`,
		"fallback": "ph:brackets-round-duotone",
	});
}

export default Component;
