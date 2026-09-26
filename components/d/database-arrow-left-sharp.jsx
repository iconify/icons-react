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
		"content": `<style>.rp91n1b7j {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M19 4C19 5.1046 15.4184 6 11 6C6.5816 6 3 5.1046 3 4C3 2.8954 6.5816 2 11 2C15.4184 2 19 2.8954 19 4ZM3 4L3 20C3 21.1046 6.5816 22 11 22L12 22M19 13L19 4M3 12C3 13.1046 6.5816 14 11 14L12 14M22 19L15 19M18.2929 15.7071L15 19L18.2929 22.2929");
}
</style><path class="rp91n1b7j"/>`,
		"fallback": "keyline-icons:database-arrow-left-sharp",
	});
}

export default Component;
