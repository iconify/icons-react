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
		"content": `<style>.q7oke1bpf {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 6.0006L10 9.5L10 14.5L2 17.9994ZM22 6.0006L14 9.5L14 14.5L22 17.9994ZM10 9L14 9L14 15L10 15Z");
}
</style><path class="q7oke1bpf"/>`,
		"fallback": "keyline-icons:bow-tie-sharp",
	});
}

export default Component;
