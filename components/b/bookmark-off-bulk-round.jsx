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

.lk3mfzb5t {
  d: path("M2.293 2.707a.999.999 0 1 1 1.414-1.414l19 19a.999.999 0 1 1-1.414 1.414Z");
}

.qlmax3e6g {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M10.243 5L8.478 3.236A5 5 0 0 1 10 3h4a5 5 0 0 1 5 5v5.757Zm-4.244-.001L19 18c0 .285-.076.563-.225.806c-.624 1.009-2.073.939-3.064.629a4.9 4.9 0 0 1-1.266-.603L12 17.202l-2.445 1.63a4.9 4.9 0 0 1-1.266.603c-.991.31-2.44.38-3.064-.629A1.54 1.54 0 0 1 5 18V8c0-1.084.348-2.134.999-3.001");
}
</style><g class="cuyn6tgcc"><path class="qlmax3e6g"/><path class="lk3mfzb5t"/></g>`,
		"fallback": "coolicons:bookmark-off-bulk-round",
	});
}

export default Component;
