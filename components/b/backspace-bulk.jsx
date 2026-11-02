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

.f_ls617sv {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M9 5h10a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H9a1 1 0 0 1-.707-.293l-5-5a2.414 2.414 0 0 1 0-3.414l5-5A1 1 0 0 1 9 5");
}

.frzwt_t1l {
  d: path("M13.707 9.293L15 10.586l1.293-1.293a.999.999 0 1 1 1.414 1.414L16.414 12l1.293 1.293a.999.999 0 1 1-1.414 1.414L15 13.414l-1.293 1.293a.999.999 0 1 1-1.414-1.414L13.586 12l-1.293-1.293a.999.999 0 1 1 1.414-1.414");
}
</style><g class="cuyn6tgcc"><path class="f_ls617sv"/><path class="frzwt_t1l"/></g>`,
		"fallback": "coolicons:backspace-bulk",
	});
}

export default Component;
