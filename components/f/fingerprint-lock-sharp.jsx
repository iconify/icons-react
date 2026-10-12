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
		"content": `<style>.qtprv0uao {
  d: path("M8.75 20.25L8 18.225V14a4 4 0 0 1 8 0v3.571L15.5 19");
}

.vbjqiccip {
  d: path("M12 14v4.629l1.1 2.121");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z4gt_lbyk {
  d: path("M6 5.75a10.2 10.2 0 0 1 12 0M5 17.25c-.15-.75-.25-1.5-.25-2.25v-1a7.25 7.25 0 0 1 14.5 0v3.225l-.6 2.025");
}
</style><g class="x2cwu0gfd"><path class="z4gt_lbyk"/><path class="qtprv0uao"/><path class="vbjqiccip"/></g>`,
		"fallback": "iconoven:fingerprint-lock-sharp",
	});
}

export default Component;
