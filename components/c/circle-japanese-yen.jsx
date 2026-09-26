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

.uk-eumb3f {
  d: path("M12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2Z");
}

.xb0-1gk4b {
  d: path("M8.5 6L12 10L15.5 6M12 10L12 18M8.5 13L15.5 13M8.5 16L15.5 16");
}
</style><g class="nrj6p8qat"><path class="uk-eumb3f"/><path class="xb0-1gk4b"/></g>`,
		"fallback": "keyline-icons:circle-japanese-yen",
	});
}

export default Component;
