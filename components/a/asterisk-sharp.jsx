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
		"content": `<style>.f3yrkpbxm {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 4L12 20M5.6 16.8L18.4 7.2M5.6 7.2L18.4 16.8");
}
</style><path class="f3yrkpbxm"/>`,
		"fallback": "keyline-icons:asterisk-sharp",
	});
}

export default Component;
