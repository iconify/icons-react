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
		"content": `<style>.lghy7zdvd {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M11 7L19 7C21.2091 7 23 8.7909 23 11L23 19C23 21.2091 21.2091 23 19 23L11 23C8.7909 23 7 21.2091 7 19L7 11C7 8.7909 8.7909 7 11 7Z");
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ty_l0gbba {
  d: path("M15.8284 4C15.4046 2.8015 14.2714 2 13 2L5 2C3.3432 2 2 3.3432 2 5L2 13C2 14.2714 2.8015 15.4046 4 15.8284M12 15L18 15");
}
</style><g class="nrj6p8qat"><path class="lghy7zdvd"/><path class="ty_l0gbba"/></g>`,
		"fallback": "keyline-icons:copy-minus-duotone",
	});
}

export default Component;
