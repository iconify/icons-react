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
		"content": `<style>.lf8uiic0i {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M12 1C18.0751 1 23 5.9249 23 12C23 12.5523 22.5523 13 22 13H16C14.3431 13 13 14.3431 13 16V22C13 22.5523 12.5523 23 12 23C5.9249 23 1 18.0751 1 12C1 5.9249 5.9249 1 12 1ZM11 6V12C11 12.5523 11.4477 13 12 13H17C17.5523 13 18 12.5523 18 12C18 11.4477 17.5523 11 17 11H13V6C13 5.4477 12.5523 5 12 5C11.4477 5 11 5.4477 11 6Z");
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.nwp2qob7b {
  d: path("M22 19H16M19 22L16 19L19 16");
}
</style><g class="nrj6p8qat"><path clip-rule="evenodd" class="lf8uiic0i"/><path class="nwp2qob7b"/></g>`,
		"fallback": "keyline-icons:clock-arrow-left-fill",
	});
}

export default Component;
