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
		"content": `<style>.cz_xd6byi {
  fill: var(--svg-color--1c4c06, #1c4c06);
  d: path("M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18");
}

.ft5dv1b6b {
  fill: none;
}

.xgjrm1brk {
  fill: var(--svg-color--ceff72, #ceff72);
  d: path("M12.001 8.295c-3.706 0-4.765 2.382-4.765 3.706s.97 3.705 4.765 3.705c3.616 0 4.765-2.382 4.765-3.705c0-1.324-1.06-3.706-4.765-3.706");
}
</style><g class="ft5dv1b6b"><path class="cz_xd6byi"/><path class="xgjrm1brk"/></g>`,
		"fallback": "token-branded:cho",
	});
}

export default Component;
