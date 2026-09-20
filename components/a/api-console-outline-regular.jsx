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
		"content": `<style>.g9wbxyb4w {
  d: path("M12 14.5h4.5");
}

.n09nomjwg {
  d: path("M15 6h3a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3H6a3 3 0 0 1 -3 -3V9a3 3 0 0 1 3 -3h3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.p0dhoi0ud {
  d: path("M7 9.5 9.5 12 7 14.5");
}
</style><g class="nrj6p8qat"><path class="n09nomjwg"/><path class="p0dhoi0ud"/><path class="g9wbxyb4w"/></g>`,
		"fallback": "iconmind:api-console-outline-regular",
	});
}

export default Component;
