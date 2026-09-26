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
		"content": `<style>.u0ycukbtn {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M14 2L4 2L4 22L11 22M14 2L20 8L20 13M14 2L14 8L20 8M17 23L17 16M13.7071 19.2929L17 16L20.2929 19.2929");
}
</style><path class="u0ycukbtn"/>`,
		"fallback": "keyline-icons:file-arrow-up-sharp",
	});
}

export default Component;
