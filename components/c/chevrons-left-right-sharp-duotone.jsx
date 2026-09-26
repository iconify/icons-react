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
		"content": `<style>.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ti5i4qb-f {
  d: path("M14.7071 6.7071L20 12L14.7071 17.2929");
}

.vk-snbc5a {
  stroke-opacity: 0.4;
  d: path("M9.2929 6.7071L4 12L9.2929 17.2929");
}
</style><g class="gp_8x1bzb"><path class="vk-snbc5a"/><path class="ti5i4qb-f"/></g>`,
		"fallback": "keyline-icons:chevrons-left-right-sharp-duotone",
	});
}

export default Component;
