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
		"content": `<style>.e1otdgb2g {
  stroke-opacity: 0.4;
  d: path("M8 10V14M16 11V13");
}

.ngysh-w9y {
  d: path("M4 11V13M12 8V16M20 10V14");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="e1otdgb2g"/><path class="ngysh-w9y"/></g>`,
		"fallback": "keyline-icons:audio-lines-low-duotone",
	});
}

export default Component;
