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
		"content": `<style>.x5ktthbzh {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M14 2L4 2L4 22L11 22M14 2L20 8L20 13M14 2L14 8L20 8M13 19L20 19M16.7071 15.7071L20 19L16.7071 22.2929");
}
</style><path class="x5ktthbzh"/>`,
		"fallback": "keyline-icons:file-arrow-right-sharp",
	});
}

export default Component;
