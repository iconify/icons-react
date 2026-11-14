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
		"content": `<style>.ai7un0e_c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5V8M9.5 8h5v7.5h-5Zm2.5 7.5V18a2.5 2.5 0 0 1-2.5 2.5h-5m6.25-16.25h2.5m-2.5 2h2.5");
}
</style><path class="ai7un0e_c"/>`,
		"fallback": "uix-sharp:cable-audio-jack",
	});
}

export default Component;
