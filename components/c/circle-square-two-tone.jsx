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

.o8h06wbke {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  fill-rule: evenodd;
  d: path("M17 9C17 13.4183 13.4183 17 9 17C4.5817 17 1 13.4183 1 9C1 4.5817 4.5817 1 9 1C13.4183 1 17 4.5817 17 9ZM11 8H20C21.6569 8 23 9.3431 23 11V20C23 21.6569 21.6569 23 20 23H11C9.3431 23 8 21.6569 8 20V11C8 9.3431 9.3431 8 11 8Z");
  stroke: none;
}

.ocx9blbvl {
  d: path("M16 9C16 5.1339 12.8661 2 9 2C5.1339 2 2 5.1339 2 9C2 12.8661 5.1339 16 9 16C12.8661 16 16 12.8661 16 9ZM11 9H20C21.1046 9 22 9.8954 22 11V20C22 21.1046 21.1046 22 20 22H11C9.8954 22 9 21.1046 9 20V11C9 9.8954 9.8954 9 11 9Z");
}
</style><g class="nrj6p8qat"><path clip-rule="evenodd" class="o8h06wbke"/><path class="ocx9blbvl"/></g>`,
		"fallback": "keyline-icons:circle-square-two-tone",
	});
}

export default Component;
