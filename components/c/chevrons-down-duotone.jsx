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

.uwx5i_bjp {
  stroke-opacity: 0.4;
  d: path("M7 6L12 11L17 6");
}

.wfnorhkvs {
  d: path("M7 13L12 18L17 13");
}
</style><g class="nrj6p8qat"><path class="uwx5i_bjp"/><path class="wfnorhkvs"/></g>`,
		"fallback": "keyline-icons:chevrons-down-duotone",
	});
}

export default Component;
