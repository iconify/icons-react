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
		"content": `<style>.c3-l2nbwu {
  d: path("M4 10.5V13.5M12 5V19M20 10.5V13.5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o8wr52b0x {
  stroke-opacity: 0.4;
  d: path("M8 8V16M16 10V14");
}
</style><g class="nrj6p8qat"><path class="o8wr52b0x"/><path class="c3-l2nbwu"/></g>`,
		"fallback": "keyline-icons:audio-lines-mid-duotone",
	});
}

export default Component;
