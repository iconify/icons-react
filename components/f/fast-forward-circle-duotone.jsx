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

.dbyq3obxo {
  d: path("M128 32a96 96 0 1 0 96 96a96 96 0 0 0-96-96M80 164V92l48 36Zm64 0V92l48 36Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s9jb2dbez {
  d: path("M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m68.8-94.4l-48-36A8 8 0 0 0 136 92v72a8 8 0 0 0 12.8 6.4l48-36a8 8 0 0 0 0-12.8M152 148v-40l26.67 20Zm-19.2-26.4l-48-36A8 8 0 0 0 72 92v72a8 8 0 0 0 12.8 6.4l48-36a8 8 0 0 0 0-12.8M88 148v-40l26.67 20Z");
}
</style><g class="cuyn6tgcc"><path class="dbyq3obxo"/><path class="s9jb2dbez"/></g>`,
		"fallback": "ph:fast-forward-circle-duotone",
	});
}

export default Component;
