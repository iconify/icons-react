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
		"content": `<style>.k3nhh1-fh {
  d: path("M9.5 13.9L12 11l2.5 2.9m-2.5.35v7");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zlv3sbbar {
  d: path("M12 14.25c-4.5 0-7.25-2.25-7.25-5.75S7.5 2.75 12 2.75S19.25 5 19.25 8.5S16.5 14.25 12 14.25Z");
}
</style><g class="x2cwu0gfd"><path class="zlv3sbbar"/><path class="k3nhh1-fh"/></g>`,
		"fallback": "iconoven:hand-fan-sharp",
	});
}

export default Component;
