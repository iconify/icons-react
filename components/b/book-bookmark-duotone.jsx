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
		"content": `<style>.ajfku5bny {
  d: path("M208 24H72a32 32 0 0 0-32 32v168a8 8 0 0 0 8 8h144a8 8 0 0 0 0-16H56a16 16 0 0 1 16-16h136a8 8 0 0 0 8-8V32a8 8 0 0 0-8-8m-88 16h48v72l-19.21-14.4a8 8 0 0 0-9.6 0L120 112Zm80 144H72a31.8 31.8 0 0 0-16 4.29V56a16 16 0 0 1 16-16h32v88a8 8 0 0 0 12.8 6.4L144 114l27.21 20.4A8 8 0 0 0 176 136a8.1 8.1 0 0 0 3.58-.84A8 8 0 0 0 184 128V40h16Z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.hcah5ibnw {
  d: path("M208 32v160H72a24 24 0 0 0-24 24V56a24 24 0 0 1 24-24h40v96l32-24l32 24V32Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="hcah5ibnw"/><path class="ajfku5bny"/></g>`,
		"fallback": "ph:book-bookmark-duotone",
	});
}

export default Component;
