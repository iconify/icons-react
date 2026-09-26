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

.x61kpmbew {
  d: path("M19.2071 15.5L20.8535 17.1464C21.0488 17.3417 21.0488 17.6583 20.8535 17.8536L19.2071 19.5M6 21V9M18 11.5V10C18 7.79086 16.2091 6 14 6H13M20 17.5H16C14.3431 17.5 13 18.8431 13 20.5V21");
}

.xs7teru1d {
  fill: currentColor;
  d: path("M10 6C10 8.20914 8.20914 10 6 10C3.79086 10 2 8.20914 2 6C2 3.79086 3.79086 2 6 2C8.20914 2 10 3.79086 10 6Z");
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="x61kpmbew"/><path class="xs7teru1d"/></g>`,
		"fallback": "keyline-icons:git-arrow-right-fill",
	});
}

export default Component;
