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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ta31eq_6z {
  stroke-opacity: 0.4;
  d: path("M4 9L4 22M12 2L12 22");
}

.tyki2lbul {
  d: path("M20 16L20 22");
}
</style><g class="nrj6p8qat"><path class="ta31eq_6z"/><path class="tyki2lbul"/></g>`,
		"fallback": "keyline-icons:bar-chart-two-tone",
	});
}

export default Component;
