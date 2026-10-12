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
		"content": `<style>.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xikk_ob4f {
  d: path("M2.75 8h18.5v8H2.75z");
}

.y04hpebpa {
  d: path("M5 10.5h9.5v3H5zM17.5 5v14");
}
</style><g class="x2cwu0gfd"><path class="xikk_ob4f"/><path class="y04hpebpa"/></g>`,
		"fallback": "iconoven:chart-bullet-sharp",
	});
}

export default Component;
