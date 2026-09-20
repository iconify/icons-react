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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ivlybw9ey {
  d: path("M12 8C9 4 3 5 3 9c0 3 3 4 5 3 -3 2 -4 5 -2 7s6 -1 6 -4");
}

.j6985zbnb {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M12 6v13");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.k91fgssvz {
  d: path("M12 8c3 -4 9 -3 9 1 0 3 -3 4 -5 3 3 2 4 5 2 7s-6 -1 -6 -4");
}

.me33uab7w {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M12 8c3 -4 9 -3 9 1 0 3 -3 4 -5 3 3 2 4 5 2 7s-6 -1 -6 -4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.siv-r9ykp {
  d: path("M12 6v13");
}

.vmd4wlbyo {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M12 8C9 4 3 5 3 9c0 3 3 4 5 3 -3 2 -4 5 -2 7s6 -1 6 -4");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="j6985zbnb"/><path class="vmd4wlbyo"/><path class="me33uab7w"/><path class="siv-r9ykp"/><path class="ivlybw9ey"/><path class="k91fgssvz"/></g>`,
		"fallback": "iconmind:butterfly-duotone-thin",
	});
}

export default Component;
