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
		"content": `<style>.akzx7zmsd {
  d: path("M12.5 7.5L17 12l-4.5 4.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w86_lgqoc {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0Zm4 0H17");
}
</style><g class="ulnmmdpxh"><path class="w86_lgqoc"/><path class="akzx7zmsd"/></g>`,
		"fallback": "uix-sharp:forward-circle",
	});
}

export default Component;
