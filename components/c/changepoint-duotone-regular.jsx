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
		"content": `<style>.g-wxd1xvy {
  d: path("M12 5v2.5");
}

.loqr5yt1s {
  d: path("M4 10h8l7 7");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o6iq34b2g {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4 10h8l7 7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.r0jirgjze {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M12 5v2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="o6iq34b2g"/><path class="r0jirgjze"/><path class="loqr5yt1s"/><path class="g-wxd1xvy"/></g>`,
		"fallback": "iconmind:changepoint-duotone-regular",
	});
}

export default Component;
