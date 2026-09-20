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
		"content": `<style>.h_kktzbqy {
  d: path("M18.771 8.958h-3.838l-2.635 3.08l1.056 2.993H21zm-8.198 0H3l2.095 6.073h3.826l2.684-3.115z");
}

.pte7m-lpd {
  d: path("m7.38 8.353l4.991-5.271L14.51 8.73l-2.43 2.745l-1.165-3.122zm9.133 7.288l-5.004 5.277L9.37 15.27l2.43-2.745l1.171 3.116h3.547z");
}

.zbl4isbuj {
  fill: var(--svg-color--131619, #131619);
}
</style><g class="zbl4isbuj"><path class="h_kktzbqy"/><path class="pte7m-lpd"/></g>`,
		"fallback": "token-branded:ctsi",
	});
}

export default Component;
