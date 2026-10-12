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
		"content": `<style>.c4oy5i2ao {
  d: path("M10 18.25V8.5h4v9.75Z");
}

.itxcm0bbl {
  d: path("M2.75 2.75h18.5v18.5H2.75z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zvragb-kt {
  d: path("M12 8.5V6m-1.75 0h3.5l1.75 1.25l1.75 1.05V15");
}
</style><g class="x2cwu0gfd"><path class="itxcm0bbl"/><path class="c4oy5i2ao"/><path class="zvragb-kt"/></g>`,
		"fallback": "iconoven:fire-extinguisher-sharp",
	});
}

export default Component;
