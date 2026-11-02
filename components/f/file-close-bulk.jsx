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

.jlict63gf {
  d: path("M19 10h-4a3 3 0 0 1-3-3V3a1.002 1.002 0 0 1 1.707-.707l6 6A1 1 0 0 1 19 10m-5-3a.997.997 0 0 0 1 1h1.586L14 5.414Zm-2 7.586l1.293-1.293a.999.999 0 1 1 1.414 1.414L13.414 16l1.293 1.293a.999.999 0 1 1-1.414 1.414L12 17.414l-1.293 1.293a.999.999 0 1 1-1.414-1.414L10.586 16l-1.293-1.293a.999.999 0 1 1 1.414-1.414Z");
}

.vn5g6zbpx {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M19.707 8.293A1 1 0 0 1 20 9v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6c.265 0 .52.105.707.293ZM13 7a2 2 0 0 0 2 2h3l-5-5Z");
}
</style><g class="cuyn6tgcc"><path class="vn5g6zbpx"/><path class="jlict63gf"/></g>`,
		"fallback": "coolicons:file-close-bulk",
	});
}

export default Component;
