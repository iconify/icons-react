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
		"content": `<style>.h8jv5bbog {
  d: path("M12 13.5v-5a5 5 0 0 1 5 5Z");
}

.ttrwiabng {
  d: path("M4 13.5a8 8 0 1 0 16 0a8 8 0 1 0-16 0Zm5.5-11h5m-2.5 0v3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ttrwiabng"/><path class="h8jv5bbog"/></g>`,
		"fallback": "uix-sharp:game-clock",
	});
}

export default Component;
