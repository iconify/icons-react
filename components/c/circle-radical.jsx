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

.ox_05kl4h {
  d: path("M12 2C17.5228 2 22 6.4772 22 12C22 17.5228 17.5228 22 12 22C6.4772 22 2 17.5228 2 12C2 6.4772 6.4772 2 12 2Z");
}

.w1pb88qcg {
  d: path("M7.3125 12.9375L8.2267 12.328C8.4841 12.1564 8.834 12.2574 8.9604 12.5397L10.2367 15.3902C10.4308 15.8237 11.0633 15.7677 11.1782 15.3068L12.843 8.629C12.8985 8.4063 13.0986 8.25 13.3282 8.25L16.6875 8.25");
}
</style><g class="nrj6p8qat"><path class="ox_05kl4h"/><path class="w1pb88qcg"/></g>`,
		"fallback": "keyline-icons:circle-radical",
	});
}

export default Component;
