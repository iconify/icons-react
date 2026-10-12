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
		"content": `<style>.ae0h5kb0o {
  d: path("M9 15h6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kmgwxaclg {
  width: 4px;
  height: 2.5px;
  x: 10px;
  y: 2.75px;
  rx: 1px;
}

.mfnjzkrjs {
  d: path("M10.75 7.5h2.5v3.91a5 5 0 1 1-2.5 0Z");
}
</style><g class="hntgybcog"><path class="mfnjzkrjs"/><rect class="kmgwxaclg"/><path class="ae0h5kb0o"/></g>`,
		"fallback": "iconoven:erlenmeyer",
	});
}

export default Component;
