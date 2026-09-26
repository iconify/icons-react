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
		"content": `<style>.swa786bqk {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M14 2L4 2L4 22L20 22L20 8L14 2ZM14 2L14 8L20 8M10 2L10 7M10 9L10 14M12 16C12 17.1046 11.1046 18 10 18C8.8954 18 8 17.1046 8 16C8 14.8954 8.8954 14 10 14C11.1046 14 12 14.8954 12 16Z");
}
</style><path class="swa786bqk"/>`,
		"fallback": "keyline-icons:file-zip-sharp",
	});
}

export default Component;
