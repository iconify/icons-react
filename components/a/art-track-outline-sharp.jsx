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
		"content": `<style>.xgk_pbbay {
  fill: currentColor;
  d: path("M13.77 18h-12V6h12zm-11-1h10V7h-10zM17 18V6h1v12zm4.23 0V6h1v12zm-17-3.23h7.078l-2.139-2.886l-1.9 2.5l-1.4-1.85zM2.77 7v10z");
}
</style><path class="xgk_pbbay"/>`,
		"fallback": "material-symbols-light:art-track-outline-sharp",
	});
}

export default Component;
