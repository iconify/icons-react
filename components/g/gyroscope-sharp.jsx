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
		"content": `<style>.ijc7c0bmh {
  d: path("M7.25 11a4.75 1.75 0 1 0 9.5 0a4.75 1.75 0 1 0-9.5 0ZM12 2.75V18m.32.38l2.11 2.49l.32.38h-5.5l.32-.38l2.11-2.49L12 18z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yxuuwg55m {
  d: path("M12 4a7 7 0 1 1 0 14a7 7 0 1 1 0-14Z");
}
</style><g class="x2cwu0gfd"><path class="yxuuwg55m"/><path class="ijc7c0bmh"/></g>`,
		"fallback": "iconoven:gyroscope-sharp",
	});
}

export default Component;
