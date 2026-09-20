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
		"content": `<style>.eyg8grrik {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M12 8C9 4 3 5 3 9c0 3 3 4 5 3 -3 2 -4 5 -2 7s6 -1 6 -4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ivlybw9ey {
  d: path("M12 8C9 4 3 5 3 9c0 3 3 4 5 3 -3 2 -4 5 -2 7s6 -1 6 -4");
}

.k91fgssvz {
  d: path("M12 8c3 -4 9 -3 9 1 0 3 -3 4 -5 3 3 2 4 5 2 7s-6 -1 -6 -4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pc5uufbty {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M12 8c3 -4 9 -3 9 1 0 3 -3 4 -5 3 3 2 4 5 2 7s-6 -1 -6 -4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.siv-r9ykp {
  d: path("M12 6v13");
}

.wukrypbsc {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M12 6v13");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="wukrypbsc"/><path class="eyg8grrik"/><path class="pc5uufbty"/><path class="siv-r9ykp"/><path class="ivlybw9ey"/><path class="k91fgssvz"/></g>`,
		"fallback": "iconmind:butterfly-duotone-regular",
	});
}

export default Component;
