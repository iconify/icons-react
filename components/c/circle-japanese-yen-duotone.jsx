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
		"content": `<style>.g2u3clbzs {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M12 1C18.0753 1 23 5.9247 23 12C23 18.0753 18.0753 23 12 23C5.9247 23 1 18.0753 1 12C1 5.9247 5.9247 1 12 1Z");
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.xb0-1gk4b {
  d: path("M8.5 6L12 10L15.5 6M12 10L12 18M8.5 13L15.5 13M8.5 16L15.5 16");
}
</style><g class="nrj6p8qat"><path class="g2u3clbzs"/><path class="xb0-1gk4b"/></g>`,
		"fallback": "keyline-icons:circle-japanese-yen-duotone",
	});
}

export default Component;
