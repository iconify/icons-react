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
		"content": `<style>.bngd-4bdu {
  fill: currentColor;
  d: path("M17.718 7H21a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h3.282A3.551 3.551 0 0 1 12 2.979A3.55 3.55 0 0 1 17.718 7M11 7v-.909a3.5 3.5 0 0 1-.02-1.053a1.55 1.55 0 0 0-1.661-1.077A1.549 1.549 0 0 0 9.111 7Zm2 0h1.889a1.55 1.55 0 1 0-1.869-1.962c.047.35.04.705-.02 1.053Zm-2 3v3H5a1 1 0 0 0 0 2h6v3a1 1 0 0 0 2 0v-3h6a1 1 0 0 0 0-2h-6v-3a1 1 0 0 0-2 0");
}
</style><path class="bngd-4bdu"/>`,
		"fallback": "coolicons:gift-fill-sharp",
	});
}

export default Component;
