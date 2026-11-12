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
		"content": `<style>.anlkm7xov {
  fill: currentColor;
  d: path("M8.30273 11.5956L11.6296 8.16485C11.8428 7.94505 12.1573 7.94505 12.3704 8.16485L18.8001 14.7953C19.2013 15.2091 18.9581 16 18.4297 16H12.7071L8.30273 11.5956Z");
}

.fbtcj0tzl {
  fill: currentColor;
  d: path("M11.2929 16H5.5703C5.04189 16 4.79869 15.2091 5.1999 14.7953L7.60648 12.3136L11.2929 16Z");
  opacity: var(--svg-opacity--0-5, 0.5);
}
</style><path class="anlkm7xov"/><path class="fbtcj0tzl"/>`,
		"fallback": "solar:alt-arrow-up-bold-duotone",
	});
}

export default Component;
