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
		"content": `<style>.ls-9z-bpq {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M22 6L3 6M6.2929 2.7071L3 6L6.2929 9.2929M2 18L21 18M17.7071 14.7071L21 18L17.7071 21.2929");
}
</style><path class="ls-9z-bpq"/>`,
		"fallback": "keyline-icons:arrow-left-right-sharp",
	});
}

export default Component;
