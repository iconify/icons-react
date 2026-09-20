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
		"content": `<style>.khaz4hblu {
  d: path("M6 7a2 2 0 0 1 2 -2h2.5a2 2 0 0 1 2 2v2.5a2 2 0 0 1 -2 2H8a2 2 0 0 1 -2 -2Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o1v68zbdu {
  d: path("M2.5 21V5l3 -3h7l3 3v16Z");
}

.xk6jv7b-l {
  d: path("M15 8h3l3 3v6");
}
</style><g class="nrj6p8qat"><path class="o1v68zbdu"/><path class="khaz4hblu"/><path class="xk6jv7b-l"/></g>`,
		"fallback": "iconmind:fuel-pump-outline-regular",
	});
}

export default Component;
