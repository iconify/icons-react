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
		"content": `<style>.a5i76hb6u {
  stroke-opacity: 0.4;
  d: path("M7 3v2m4-2v2M7 19v2m4-2v2");
}

.cpomvobiw {
  d: path("M7 5v14M7 5h6a3 3 0 0 1 3 3v1a3 3 0 0 1-3 3H7m0 0h7a3 3 0 0 1 3 3v1a3 3 0 0 1-3 3H7");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="a5i76hb6u"/><path class="cpomvobiw"/></g>`,
		"fallback": "coolicons:currency-bitcoin-duocolor-round",
	});
}

export default Component;
