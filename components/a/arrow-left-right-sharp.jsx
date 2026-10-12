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
		"content": `<style>.lpk36pvbt {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M22 7L3 7M7.2929 11.2929L3 7L7.2929 2.7071M2 17L21 17M16.7071 12.7071L21 17L16.7071 21.2929");
}
</style><path class="lpk36pvbt"/>`,
		"fallback": "keyline-icons:arrow-left-right-sharp",
	});
}

export default Component;
