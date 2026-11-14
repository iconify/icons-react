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
		"content": `<style>.eooy75brd {
  d: path("M8.75 9H9a1.5 1.5 0 0 1 0 3h-.75m5-4.5h5.5v3a2.75 2.75 0 0 1-5.5 0Z");
}

.hxyabovjh {
  d: path("M18.75 9H19a1.5 1.5 0 0 1 0 3h-.75m-15.5 4h18.5");
}

.mhkuqgz9x {
  d: path("M3.25 7.5h5.5v3a2.75 2.75 0 0 1-5.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="mhkuqgz9x"/><path class="eooy75brd"/><path class="hxyabovjh"/></g>`,
		"fallback": "uix-sharp:double-espresso",
	});
}

export default Component;
