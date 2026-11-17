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
		"content": `<style>.f49dqik9g {
  fill: currentColor;
  d: path("M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m9-5a1 1 0 0 0-2 0v5.382l-1.447.724a1 1 0 1 0 .894 1.788L9 14.618V16a1 1 0 0 0 1 1h6a1 1 0 0 0 0-2h-5v-1.382l1.447-.724a1 1 0 1 0-.894-1.788l-.553.276Z");
}
</style><path class="f49dqik9g"/>`,
		"fallback": "coolicons:circle-currency-litecoin-fill",
	});
}

export default Component;
