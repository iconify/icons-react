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
		"content": `<style>.fwclecbzy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M20.7071 12.7071L11.7071 21.7071C11.4211 21.9931 10.991 22.0787 10.6173 21.9239C10.2436 21.7691 10 21.4045 10 21L10 18C10 17.4477 9.5523 17 9 17L4 17C3.4477 17 3 16.5523 3 16L3 8C3 7.4477 3.4477 7 4 7L9 7C9.5523 7 10 6.5523 10 6L10 3C10 2.5955 10.2436 2.2309 10.6173 2.0761C10.991 1.9213 11.4211 2.0069 11.7071 2.2929L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071Z");
}
</style><path class="fwclecbzy"/>`,
		"fallback": "keyline-icons:arrow-big-right-short",
	});
}

export default Component;
