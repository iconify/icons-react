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
		"content": `<style>.b3x1yvboz {
  d: path("M18 14.5q.5 3 3.5 3.5q-3 .5-3.5 3.5q-.5-3-3.5-3.5q3-.5 3.5-3.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z_crjbb3c {
  d: path("M13.995 20H3l9-16.5l5.746 10.535M12 8.5V13m0 3h.01");
}
</style><g class="ulnmmdpxh"><path class="z_crjbb3c"/><path class="b3x1yvboz"/></g>`,
		"fallback": "uix-sharp:ai-risk",
	});
}

export default Component;
