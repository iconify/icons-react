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
		"content": `<style>.tm74k-cqp {
  fill: currentColor;
  d: path("m17.707 17.707l-5 5a1 1 0 0 1-1.414 0l-10-10a1 1 0 0 1 0-1.414l10-10a1 1 0 0 1 1.414 0l10 10a1 1 0 0 1 0 1.414Zm-7-8.414a.999.999 0 1 0-1.414 1.414L10.586 12l-1.293 1.293a.999.999 0 1 0 1.414 1.414L12 13.414l1.293 1.293a.999.999 0 1 0 1.414-1.414L13.414 12l1.293-1.293a.999.999 0 1 0-1.414-1.414L12 10.586Z");
}
</style><path class="tm74k-cqp"/>`,
		"fallback": "coolicons:diamond-close-fill-sharp",
	});
}

export default Component;
