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
		"content": `<style>.z0o12bb2z {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 2L15 2M3 7L21 7M6 7L18 7L18 22L6 22ZM9.7071 12.7071L14.2929 17.2929M14.2929 12.7071L9.7071 17.2929");
}
</style><path class="z0o12bb2z"/>`,
		"fallback": "keyline-icons:bin-x-sharp",
	});
}

export default Component;
