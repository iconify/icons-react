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
		"content": `<style>.cppyiwbyk {
  d: path("M7.757 16.243a6 6 0 0 1 0-8.486m8.486 0a6 6 0 0 1 0 8.486");
}

.tx5h6mbvm {
  d: path("M7.5 12c1.5-2.25 4.5-2.25 6 0l2-1.75v3.5l-2-1.75c-1.5 2.25-4.5 2.25-6 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zdgu3ybil {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0Z");
}
</style><g class="ulnmmdpxh"><path class="zdgu3ybil"/><path class="cppyiwbyk"/><path class="tx5h6mbvm"/></g>`,
		"fallback": "uix-sharp:fish-tank-farm",
	});
}

export default Component;
