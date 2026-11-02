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
		"content": `<style>.cau3u1blb {
  fill: currentColor;
  d: path("m17.707 17.707l-5 5a1 1 0 0 1-1.414 0l-10-10a1 1 0 0 1 0-1.414l10-10a1 1 0 0 1 1.414 0l10 10a1 1 0 0 1 0 1.414ZM15 11H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2");
}
</style><path class="cau3u1blb"/>`,
		"fallback": "coolicons:diamond-minus-fill-sharp",
	});
}

export default Component;
