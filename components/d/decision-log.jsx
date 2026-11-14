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
		"content": `<style>.gli7hhbby {
  d: path("M12 20.5V11L5 4m7 7l7-7");
}

.ju5kit9ai {
  d: path("M5 9V4h5m4 0h5v5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="gli7hhbby"/><path class="ju5kit9ai"/></g>`,
		"fallback": "uix-sharp:decision-log",
	});
}

export default Component;
