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

.pys0i3bjn {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M17 9C17 13.4183 13.4183 17 9 17C4.5817 17 1 13.4183 1 9C1 4.5817 4.5817 1 9 1C13.4183 1 17 4.5817 17 9Z");
}

.x3p-fkbgj {
  d: path("M23 15C23 19.4183 19.4183 23 15 23C10.5817 23 7 19.4183 7 15C7 10.5817 10.5817 7 15 7C19.4183 7 23 10.5817 23 15Z");
}
</style><g class="cuyn6tgcc"><path class="pys0i3bjn"/><path class="x3p-fkbgj"/></g>`,
		"fallback": "keyline-icons:circles-duotone",
	});
}

export default Component;
