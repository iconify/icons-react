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
		"content": `<style>.fi-crqzat {
  fill: var(--svg-color--00d8d5, #00d8d5);
  d: path("M17.906 7.5a2.25 2.25 0 1 0 0-4.5a2.25 2.25 0 0 0 0 4.5");
}

.ft5dv1b6b {
  fill: none;
}

.iy_mo-0ab {
  fill: var(--svg-color--f2548b, #f2548b);
  d: path("M17.906 21a2.25 2.25 0 1 0 0-4.5a2.25 2.25 0 0 0 0 4.5");
}

.vsmmv9bxw {
  fill: var(--svg-color--fff, #fff);
  d: path("M12.844 3a9 9 0 0 0 0 18v-3.938A5.06 5.06 0 0 1 7.78 12a5.063 5.063 0 0 1 5.063-5.063zm0 14.062a5.06 5.06 0 0 0 4.677-7a5.06 5.06 0 0 0-4.677-3.125");
}
</style><g class="ft5dv1b6b"><path class="vsmmv9bxw"/><path class="fi-crqzat"/><path class="iy_mo-0ab"/></g>`,
		"fallback": "token-branded:cqt",
	});
}

export default Component;
