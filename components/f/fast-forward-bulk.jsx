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
		"content": `<style>.n-z39yboq {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M5.76 6.341L11 9.397V8.5a2.501 2.501 0 0 1 3.76-2.159l6 3.5a2.5 2.5 0 0 1 0 4.318l-6 3.5A2.5 2.5 0 0 1 11 15.5v-.897l-5.24 3.056A2.5 2.5 0 0 1 2 15.5v-7a2.501 2.501 0 0 1 3.76-2.159");
}
</style><path class="n-z39yboq"/>`,
		"fallback": "coolicons:fast-forward-bulk",
	});
}

export default Component;
