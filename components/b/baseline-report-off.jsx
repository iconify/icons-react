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
		"content": `<style>.o963cqbmt {
  fill: currentColor;
  d: path("M11 7h2v2.92l6.91 6.91l1.09-1.1V8.27L15.73 3H8.27L7.18 4.1L11 7.92zm11.27 14.73l-20-20.01L1 2.99l3.64 3.64L3 8.27v7.46L8.27 21h7.46l1.64-1.63L21 23zM12 17.3c-.72 0-1.3-.58-1.3-1.3s.58-1.3 1.3-1.3s1.3.58 1.3 1.3s-.58 1.3-1.3 1.3");
}
</style><path class="o963cqbmt"/>`,
		"fallback": "ic:baseline-report-off",
	});
}

export default Component;
