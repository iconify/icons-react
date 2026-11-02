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
		"content": `<style>.f7e0yac4b {
  d: path("M3 14L6 3l3 7h6l3-7l3 11");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pu51xlbah {
  stroke-opacity: 0.4;
  d: path("m3 14l9 7l9-7");
}
</style><g class="nrj6p8qat"><path class="pu51xlbah"/><path class="f7e0yac4b"/></g>`,
		"fallback": "coolicons:gitlab-duocolor",
	});
}

export default Component;
