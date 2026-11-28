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
		"content": `<style>.f-auy3_qk {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M20 1V23M4 1V23M4 7V17H9V7H4ZM15 7V17H20V7H15Z");
}
</style><path class="f-auy3_qk"/>`,
		"fallback": "keyline-icons:align-horizontal-space-between-sharp",
	});
}

export default Component;
