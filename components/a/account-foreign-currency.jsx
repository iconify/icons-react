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
		"content": `<style>.hrsb_ybcn {
  d: path("M17.5 13.5c-2 2-2 6 0 8");
}

.rn4vndrgo {
  d: path("M12 21.5H4.5v-19h15V11m-11-8.5v19m3-14.5h4");
}

.t4ug9bcqi {
  d: path("M13.5 17.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0Zm0 0h8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="rn4vndrgo"/><path class="t4ug9bcqi"/><path class="hrsb_ybcn"/></g>`,
		"fallback": "uix-sharp:account-foreign-currency",
	});
}

export default Component;
