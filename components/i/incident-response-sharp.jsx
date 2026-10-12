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
		"content": `<style>.e-m9lnbbm {
  d: path("M2.75 7h18.5v14H2.75zm6 0V3.75h6.5V7");
}

.flydcbbrq {
  d: path("M12 9.25h2.75l-.21.45l-1.08 2.35l-.21.45h2.25l-.3.4l-4.4 5.95l-.3.4v-4.5H8.25l.25-.43l2.75-4.64l.25-.43z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="e-m9lnbbm"/><path class="flydcbbrq"/></g>`,
		"fallback": "iconoven:incident-response-sharp",
	});
}

export default Component;
