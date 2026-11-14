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
		"content": `<style>.irzl4396i {
  d: path("M3.5 4h17v16.5h-17Z");
}

.m4jrovbco {
  d: path("M12 18.5c-2 0-2.5-1.5-1.75-3c.75-1 1.25-1.5 1.25-3c1.5 1 1 2.25 2 2.75c1 1.25.5 3.25-1.5 3.25Z");
}

.tjgbbmwxx {
  d: path("M7.5 9h9v11.5h-9Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="irzl4396i"/><path class="tjgbbmwxx"/><path class="m4jrovbco"/></g>`,
		"fallback": "uix-sharp:fireplace",
	});
}

export default Component;
