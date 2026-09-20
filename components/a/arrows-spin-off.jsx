import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

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

.fwhjwlbez {
  d: path("M6.349 6.969a1 1 0 0 1 1.11 1.664l-3.001 2a1 1 0 1 1-1.11-1.664z");
}

.ibygzrm5w {
  d: path("M5.05 14.95a1 1 0 1 1 1.414-1.414A5 5 0 0 0 15 10a1 1 0 1 1 2 0a7 7 0 0 1-11.95 4.95");
}

.o0kovfbsc {
  d: path("M1.075 7.356a1 1 0 1 1 1.664-1.11l2 3a1 1 0 1 1-1.664 1.11zm.218-4.649a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z");
}

.ohhdvcc5t {
  d: path("M13.559 12.832a1 1 0 1 1-1.11-1.664l3-2a1 1 0 1 1 1.11 1.664z");
}

.phzn_bbsb {
  d: path("M18.832 12.445a1 1 0 0 1-1.664 1.11l-2-3a1 1 0 1 1 1.664-1.11zm-3.975-7.594a1 1 0 1 1-1.414 1.414a5 5 0 0 0-8.536 3.536a1 1 0 1 1-2 0a7 7 0 0 1 11.95-4.95");
}
</style><g class="cuyn6tgcc"><path class="ibygzrm5w"/><path class="ohhdvcc5t"/><path class="phzn_bbsb"/><path class="fwhjwlbez"/><path class="o0kovfbsc"/></g>`,
		"fallback": "pepicons-pop:arrows-spin-off",
	});
}

export default Component;
