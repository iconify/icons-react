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
		"content": `<style>.a_abyrbjv {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  fill-rule: evenodd;
  d: path("M7 1V5H18C18.552 5 19 5.45 19 6V17H23V19H19V23H17V19H6C5.448 19 5 18.55 5 18V7H1V5H5V1H7ZM7 7V17H17V7H7Z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.lo14_gros {
  d: path("M6.999 1L7.049 5V7L6.999 17L16.999 16.95H18.999L22.999 17V19L18.999 19.05H16.999L5.999 19C5.447 19 4.999 18.55 4.999 18L4.949 7V5L4.999 1H6.999Z");
}
</style><g class="cuyn6tgcc"><path clip-rule="evenodd" class="a_abyrbjv"/><path class="lo14_gros"/></g>`,
		"fallback": "keyline-icons:crop-sharp-duotone",
	});
}

export default Component;
