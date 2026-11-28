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
		"content": `<style>.jiexlmbiw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M18.9923 7.2487L21.5574 11.4317C21.8468 11.9036 22 12.4464 22 13L22 17C22 18.6569 20.6569 20 19 20L5 20C3.3431 20 2 18.6569 2 17L2 13C2 12.4464 2.1532 11.9036 2.4426 11.4317L5.0077 7.2487M2 13L8 13L10 16L14 16L16 13L22 13M12 11V4M9 7L12 4L15 7");
}
</style><path class="jiexlmbiw"/>`,
		"fallback": "keyline-icons:inbox-arrow-up",
	});
}

export default Component;
