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
		"content": `<style>.avr54f9wv {
  fill: currentColor;
  d: path("m17.399 21.985l-6.692-6.692a5.24 5.24 0 0 0-7.414 0L2 16.586V7a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5v10a5 5 0 0 1-4.601 4.985M16.414 9l1.293-1.293a.999.999 0 1 0-1.414-1.414L15 7.586l-1.293-1.293a.999.999 0 1 0-1.414 1.414L13.586 9l-1.293 1.293a.999.999 0 1 0 1.414 1.414L15 10.414l1.293 1.293a.999.999 0 1 0 1.414-1.414ZM3.191 18.224l1.516-1.517a3.243 3.243 0 0 1 4.586 0L14.586 22H7a4.99 4.99 0 0 1-4.584-3.001Z");
}
</style><path class="avr54f9wv"/>`,
		"fallback": "coolicons:image-close-fill-round",
	});
}

export default Component;
