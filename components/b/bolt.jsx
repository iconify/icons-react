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
		"content": `<style>.k7zwcnbrs {
  d: path("M21 3L7.2 8.192l5.838 4.847L3 21l13.5-5.193l-1.385-7.961z");
}

.t3j029b6z {
  fill: var(--svg-color--280c9c, #280c9c);
}

.zp957qwgn {
  d: path("M7.2 17.196v-8.56l5.28 4.404z");
}
</style><g class="t3j029b6z"><path class="zp957qwgn"/><path class="k7zwcnbrs"/></g>`,
		"fallback": "token-branded:bolt",
	});
}

export default Component;
