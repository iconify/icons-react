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
		"content": `<style>.vd9ms5nns {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 3.5a7.5 7 0 0 1 7.5 7a7.5 5.5 0 0 1-15 0H12Zm-7.5 7L3 7m9-3.5v7m-5.5 9.25a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm8 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}
</style><path class="vd9ms5nns"/>`,
		"fallback": "uix-sharp:childcare-benefit",
	});
}

export default Component;
