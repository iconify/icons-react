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

.kbgxg_7rn {
  d: path("M224 48v160a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.o6u6u9bny {
  d: path("M216 48v48a8 8 0 0 1-16 0V67.31l-50.34 50.35a8 8 0 0 1-11.32-11.32L188.69 56H160a8 8 0 0 1 0-16h48a8 8 0 0 1 8 8m-109.66 90.34L56 188.69V160a8 8 0 0 0-16 0v48a8 8 0 0 0 8 8h48a8 8 0 0 0 0-16H67.31l50.35-50.34a8 8 0 0 0-11.32-11.32");
}
</style><g class="cuyn6tgcc"><path class="kbgxg_7rn"/><path class="o6u6u9bny"/></g>`,
		"fallback": "ph:arrows-out-simple-duotone",
	});
}

export default Component;
