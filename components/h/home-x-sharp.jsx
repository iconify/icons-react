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
		"content": `<style>.t-hxdm1ut {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12.3859 5.0748L11 3.9963L2 11L2 22L20 22L20 11M8 22L8 15L14 15L14 22M15.7071 1.7071L16 2L22 8L22.2929 8.2929M22.2929 1.7071L22 2L16 8L15.7071 8.2929");
}
</style><path class="t-hxdm1ut"/>`,
		"fallback": "keyline-icons:home-x-sharp",
	});
}

export default Component;
