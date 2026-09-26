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
		"content": `<style>.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ox_05kl4h {
  d: path("M12 2C17.5228 2 22 6.4772 22 12C22 17.5228 17.5228 22 12 22C6.4772 22 2 17.5228 2 12C2 6.4772 6.4772 2 12 2Z");
}

.pzh0o2a_t {
  d: path("M6.8672 13.2344L8.7188 12L10.8281 15.75L12.9375 8.25L17.6875 8.25");
}
</style><g class="gp_8x1bzb"><path class="ox_05kl4h"/><path class="pzh0o2a_t"/></g>`,
		"fallback": "keyline-icons:circle-radical-sharp-fill",
	});
}

export default Component;
