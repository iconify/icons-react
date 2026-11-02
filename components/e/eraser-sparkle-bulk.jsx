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

.n2ngjlb_o {
  d: path("M2.989 4.999c.134-.028.261-.107.375-.177a4.9 4.9 0 0 0 1.458-1.458c.07-.114.149-.241.177-.375L5 2.986a1 1 0 0 1 2 0l.001.003c.028.134.107.261.177.375a4.9 4.9 0 0 0 1.458 1.458c.114.07.241.149.375.177L9.014 5a1 1 0 0 1 0 2l-.003.001c-.134.028-.261.107-.375.177a4.9 4.9 0 0 0-1.458 1.458c-.07.114-.149.241-.177.375L7 9.014a1 1 0 0 1-2 0l-.001-.003c-.028-.134-.107-.261-.177-.375a4.9 4.9 0 0 0-1.458-1.458c-.114-.07-.241-.149-.375-.177L2.986 7a1 1 0 0 1 0-2Zm12.718 10.294a.999.999 0 1 1-1.414 1.414l-5-5a.999.999 0 1 1 1.414-1.414ZM11 19h10a1 1 0 0 1 0 2H11a1 1 0 0 1 0-2");
}

.qby4ggb_y {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m6.293 20.707l-2-2a2.414 2.414 0 0 1 0-3.414l10-10a2.414 2.414 0 0 1 3.414 0l3 3a2.414 2.414 0 0 1 0 3.414l-9 9A1 1 0 0 1 11 21H7a1 1 0 0 1-.707-.293");
}
</style><g class="cuyn6tgcc"><path class="qby4ggb_y"/><path class="n2ngjlb_o"/></g>`,
		"fallback": "coolicons:eraser-sparkle-bulk",
	});
}

export default Component;
