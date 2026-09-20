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
		"content": `<style>.jqegedc_t {
  fill: currentColor;
  d: path("M5 20q-.64 0-.909-.57t.128-1.065L10 11.346V5H8.116V4h7.769v1H14v6.346l5.78 7.02q.397.494.129 1.064T19 20zm2-2h10l-3.4-4h-3.2zm-2 1h14l-6-7.3V5h-2v6.7zm7-7");
}
</style><path class="jqegedc_t"/>`,
		"fallback": "material-symbols-light:experiment-outline-sharp",
	});
}

export default Component;
