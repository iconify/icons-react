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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.rurfmcbki {
  fill: var(--svg-color--00ebe5, #00ebe5);
  d: path("m16.78 18.612l3.69-1.847l-13.235-6.607L3.54 12l13.235 6.612zM12 21l3.705-1.848l-8.47-4.235l-3.68 1.848zm8.46-9l-3.696 1.842L13.08 12l3.69-1.842z");
}

.x-l_d-wpk {
  fill: var(--svg-color--37eb77, #37eb77);
  d: path("M8.3 4.853L12.006 3l3.7 1.853L12 6.695L8.3 4.848zm-1.08.535L3.53 7.235l8.47 4.23l3.69-1.842l-8.47-4.23zm9.545 3.7l3.7-1.853l-3.69-1.837l-3.705 1.848z");
}
</style><g class="ft5dv1b6b"><path class="rurfmcbki"/><path class="x-l_d-wpk"/></g>`,
		"fallback": "token-branded:card",
	});
}

export default Component;
