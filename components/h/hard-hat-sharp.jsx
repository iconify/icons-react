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
		"content": `<style>.gbu6s3yyu {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 17L2 17L2 21L22 21L22 17L20 17M4 17L4 13C4 9.2723 6.5495 6.1401 10 5.252M4 17L10 17M20 17L20 13C20 9.2723 17.4505 6.1401 14 5.252M20 17L14 17M10 17L14 17M10 17L10 5.252M14 17L14 5.252M10 5.252L10 3L14 3L14 5.252");
}
</style><path class="gbu6s3yyu"/>`,
		"fallback": "keyline-icons:hard-hat-sharp",
	});
}

export default Component;
