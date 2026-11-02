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
		"content": `<style>.avfd6wpji {
  fill: currentColor;
  d: path("M9 17V5c0-1.265 1.076-2.164 2.298-2.167c.399-.001.793.092 1.149.273l4 2a2.116 2.116 0 0 1 0 3.788L11 11.618V17a1 1 0 0 1-2 0m-2 2c0 .048.049.099.078.133c.335.396 1.086.629 1.572.731c1.139.241 2.674.184 3.731-.344c.197-.099.397-.217.541-.387c.029-.034.078-.085.078-.133a1 1 0 0 1 2 0c0 .53-.211 1.023-.551 1.424c-1.78 2.103-7.118 2.103-8.898 0C5.211 20.023 5 19.53 5 19a1 1 0 0 1 2 0");
}
</style><path class="avfd6wpji"/>`,
		"fallback": "coolicons:golf-fill",
	});
}

export default Component;
