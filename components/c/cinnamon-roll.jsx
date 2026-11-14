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
		"content": `<style>.q8fqigb0v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 3a9 9 0 0 1 0 18a7.5 7.5 0 0 1 0-15a6 6 0 0 1 0 12a4.5 4.5 0 0 1 0-9a3 3 0 0 1 0 6");
}
</style><path class="q8fqigb0v"/>`,
		"fallback": "uix-sharp:cinnamon-roll",
	});
}

export default Component;
