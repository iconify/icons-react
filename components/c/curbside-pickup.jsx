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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vw5324bte {
  d: path("M5 10.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm10 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM2.5 16h9.7m2.8-.5h6.5v6H15Zm3.25 0V18");
}

.ywknwg8ig {
  d: path("M5 10.5H2.5v-3l3-5h8l4 4.5H20a1.5 1.5 0 0 1 1.5 1.5v2H19m-10 0h6");
}
</style><g class="ulnmmdpxh"><path class="ywknwg8ig"/><path class="vw5324bte"/></g>`,
		"fallback": "uix-sharp:curbside-pickup",
	});
}

export default Component;
