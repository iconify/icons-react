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
		"content": `<style>.dtuze4tsb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 6C15.3138 6 18 8.6862 18 12C18 15.3138 15.3138 18 12 18C8.6862 18 6 15.3138 6 12C6 10.4087 6.6321 8.8826 7.7574 7.7574L12 12V6Z");
}
</style><path class="dtuze4tsb"/>`,
		"fallback": "keyline-icons:circle-seven-eighth",
	});
}

export default Component;
