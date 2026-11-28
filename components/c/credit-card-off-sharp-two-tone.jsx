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
		"content": `<style>.c4lhtdbva {
  d: path("M2 9H9M20 20H2V4H4M1.707 1.707L22.293 22.293");
}

.fqzyb8rtp {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M21 21H2C1.448 21 1 20.552 1 20V4C1 3.448 1.448 3 2 3H3L21 21ZM6.657 3H22C22.552 3 23 3.448 23 4V19.343L6.657 3Z");
  stroke: none;
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="gp_8x1bzb"><path class="fqzyb8rtp"/><path class="c4lhtdbva"/></g>`,
		"fallback": "keyline-icons:credit-card-off-sharp-two-tone",
	});
}

export default Component;
